import { Application } from "express";
import passport from "passport";
import { Strategy } from "passport-local";
import { Authentication } from "../authentication-strategies";
import { AssignmentController } from "../controllers/assignmentController";
import { enrollmentController } from "../controllers/enrollmentController";
import { StudentController } from "../controllers/studentController";
import { SubjectController } from "../controllers/subjectController";
import { Student } from "../domain/student";

export function getRoutes(app:Application) { 
    app.get("/", (req, res) => {
        res.send("Bem-vindo ao back-end do sistema de gerenciamento de estudantes!")
    })

    app.get('/students', (req, res) => { 
        StudentController.getStudents().then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    
    app.get('/students/enrollments', (req, res) => { 
        enrollmentController.getEnrollments().then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    app.get('/students/get/:id', (req, res) => { 
        StudentController.getStudentById(req.params.id).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        });
    })


    app.get('/subjects/get/:id', (req, res) => { 
        SubjectController.getSubjectById(req.params.id).then(success =>{ 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error:" + err);
        })
    })

    app.get('/subjects/assignments/get/:id', (req, res) => { 
        AssignmentController.getAssignmentsFromSubject(req.params.id).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    app.post('/students/insert', (req, res) => { 
        StudentController.createStudent(req.body).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })


    //Bearer
    app.post('/students/enroll', (req, res) => { 
        enrollmentController.enrollStudent(req.body).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    //Bearer
    app.post('/subjects/insert', (req, res) => { 
        SubjectController.addSubject(req.body).then(success => {
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        });
    })

    app.post('/subjects/assignments/insert', (req, res) => { 
        AssignmentController.insertAssignment(req.body).then(success => { 
            res.json(success);
        }, err => { 
            res.status(500).send("Internal Server Error " + err);
        })
    })


    //Login middlewares are defined in authentication-middlewares.ts, they are called everytime this route is called
    app.post("/students/login", (req, res) => { 
        const token = Authentication.createToken(req.user);
        res.set('Authorization', token);
        res.status(200).json(req.user);
        });

    app.delete('/students/delete/:id', (req, res) => { 
        StudentController.deleteStudent(req.params.id).then(success => { 
            res.send("O estudante com o Id: " + req.params.id + " foi deletado");
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })
}