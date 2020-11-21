import { Student } from "../domain/student";
import { SqlizeConnection } from "../main";

export class StudentDAO { 

    private connection:SqlizeConnection;
    
    constructor() { 
        this.connection = new SqlizeConnection();
    }

    async synchronize() { 
        await Student.sync({alter:true});
    }

    async getStudents() { 
        const users = await Student.findAll();
        return JSON.stringify(users);
    }

    async getStudentById(studentId):Promise<string> { 
        return await Student.findByPk(studentId).then(found => { 
            if (found === null) { 
                throw new Error("Estudante não encontrado.");
            }
            return JSON.stringify(found);
        }, err => { 
            throw new Error(err);
        });
    }

    async insertStudent(object):Promise<string> { 
        this.synchronize();
        return await Student.create(object).then(created => {
            return JSON.stringify(created);
        }, err => { 
            throw new Error(err);
        });
    }
}