import { Sequelize } from "sequelize";


export class SqlizeConnection { 

    public sqlize:Sequelize;

    constructor() { 
        this.sqlize = new Sequelize({dialect:"mysql", storage:"root@127.0.0.1:3306", username:"root", database:"school"});
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
