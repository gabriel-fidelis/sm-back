import { Enrollment } from "../domain/enrollment";
import { Student } from "../domain/student";
import { Subject } from "../domain/subject";
import { SqlizeConnection } from "../main";

export class enrollmentDAO { 
    private connection:SqlizeConnection;
    
    constructor() { 
        this.connection = new SqlizeConnection();
    }

    async synchronize() { 
        Enrollment.sync({alter: true});
    }

    async getEnrollments():Promise<string> { 
        return await Enrollment.findAll().then(found => { 
            return JSON.stringify(found);
        }, err => { 
            throw new Error(err);
        });
    }

    async enrollStudent(object):Promise<string> { 
        return await Enrollment.create(object).then(created => { 
            return JSON.stringify(created);
        }, err => { 
            throw new Error(err);
        })
    }
}