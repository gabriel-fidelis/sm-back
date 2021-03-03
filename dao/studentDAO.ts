import { Model } from "sequelize";
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

    async getStudentById(studentId):Promise<Model> { 
        return await Student.findByPk(studentId);
    }

    async getStudentByUsername(userName):Promise<Model> { 
        return await Student.findOne({where: {username:userName}})
    }


    async insertStudent(object):Promise<Model> { 
        return await Student.create(object);
    }

    async deleteStudent(studentId):Promise<number> { 
        return await Student.destroy({where: { 
            id:studentId
        }});
    }
}