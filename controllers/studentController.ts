import { compare, hash } from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import { Authentication } from "../authentication-strategies";
import { StudentDAO } from "../dao/studentDAO";



export class StudentController { 

    private static _studentDAO:StudentDAO = new StudentDAO();

     static async getStudents() { 
        return this._studentDAO.getStudents().then(students => {
            return JSON.parse(students);
        }, err => { 
            throw new Error(err);
        });
    }

    static async getStudentById(studentId) { 
        return this._studentDAO.getStudentById(studentId).then(found => { 
            if (found === null ) { 
                throw new Error("Estudante não encontrado.");
            }
            return JSON.parse(JSON.stringify(found));
        }, err => { 
            throw new Error(err);
        })
    }


    static async createStudent(object) { 
        const hashPassword = await Authentication.generatePassword(object.password)
        object.password = hashPassword;

        return this._studentDAO.insertStudent(object).then(created => { 
            return JSON.parse(JSON.stringify(created));
        }, err => { 
            throw new Error(err);
        })
    }

    static async deleteStudent(studentId):Promise<number> { 
        return this._studentDAO.deleteStudent(studentId);
    }



}