import { StudentDAO } from "../dao/studentDAO";


export class StudentController { 

    private static _studentDAO:StudentDAO = new StudentDAO();

     static async getStudents() { 
        let studentsResult;
        await this._studentDAO.getStudents().then(students => {
            studentsResult = JSON.parse(students);
        }, err => { 
            throw new Error(err);
        });
        return studentsResult;
    }

    static async getStudentById(studentId) { 
        let findResult;
        await this._studentDAO.getStudentById(studentId).then(result => { 
            findResult = JSON.parse(result);
        }, err => { 
            throw new Error(err);
        });
        return findResult;
    }

    static async createStudent(object) { 
        let insertResult;
        await this._studentDAO.insertStudent(object).then(createdStudent => { 
            insertResult = JSON.parse(createdStudent);
        }, err => { 
            throw new Error(err);
        });
        return insertResult;
    }

    static async deleteStudent(studentId):Promise<number> { 
        return this._studentDAO.deleteStudent(studentId);
    }
}