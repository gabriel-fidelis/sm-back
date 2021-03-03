import { Sequelize } from "sequelize";

export class SqlizeConnection { 

    public sqlize:Sequelize;

    constructor() { 
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

