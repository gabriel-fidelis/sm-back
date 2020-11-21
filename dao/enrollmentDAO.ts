import { SqlizeConnection } from "../main";

export class enrollmentDAO { 
    private connection:SqlizeConnection;
    
    constructor() { 
        this.connection = new SqlizeConnection();
    }
}