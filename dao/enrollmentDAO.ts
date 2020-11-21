import { Enrollment } from "../domain/enrollment";
import { SqlizeConnection } from "../main";

export class enrollmentDAO { 
    private connection:SqlizeConnection;
    
    constructor() { 
        this.connection = new SqlizeConnection();
    }

    async synchronize() { 
        Enrollment.sync({alter: true});
    }

    async enrollStudent(object):Promise<string> { 
        this.synchronize();
        return await Enrollment.create(object).then(created => { 
            return JSON.stringify(created);
        }, err => { 
            throw new Error(err);
        })
    }
}