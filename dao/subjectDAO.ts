import { SqlizeConnection } from "../main";

export class SubjectDAO { 
    private connection;
    constructor() { 
        this.connection = new SqlizeConnection();
    }
    
}