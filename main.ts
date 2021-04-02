import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
export class SqlizeConnection { 

    public sqlize:Sequelize;

    constructor() { 
        dotenv.config();
        this.sqlize = new Sequelize('school', 'root', '', {
            host:"localhost",
            dialect:"mysql",
            logging:false
        })
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

