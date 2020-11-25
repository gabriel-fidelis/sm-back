import { Sequelize } from "sequelize";
import { Enrollment } from "./domain/enrollment";
import { Student } from "./domain/student";
import { Subject } from "./domain/subject";


export class SqlizeConnection { 

    public sqlize:Sequelize;

    constructor() { 
        this.sqlize = new Sequelize("postgres://avqlpynkkabwsr:87ffb8e7261dccb3d3f73ec22bc640058348e117b186bfed611ee81d93b6e359@ec2-54-166-114-48.compute-1.amazonaws.com:5432/ddn54smkuegu8e", {
            dialectOptions:{
                ssl: { 
                    require:true,
                    rejectUnauthorized:false
                }
            }
        });
        this.sqlize.sync({alter:true});
    }
    
    async testConnection() { 
        try { 
            await this.sqlize.authenticate();
            console.log("Connection established");
        }
        catch (err) { 
            console.log("Connection has not been established:" + err);
        }
    
    }
}

