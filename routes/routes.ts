import { Application } from "express";
import { StudentController } from "../controllers/studentController";

export function getRoutes(app:Application) { 
    app.get("/", (req, res) => {
        res.send("Bem-vindo ao back-end do sistema de gerenciamento de estudantes!")
    })

    app.get('/students', (req, res) => { 
        StudentController.getStudents().then(result => { 
            res.json(result);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })

    app.post('/students/insert', (req, res) => { 
        StudentController.createStudent(req.body).then(createdStudent => { 
            res.json(createdStudent);
        }, err => { 
            res.status(500).send("Internal Server Error: " + err);
        })
    })
}