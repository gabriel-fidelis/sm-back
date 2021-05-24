import { Model, where } from "sequelize";
import { Assignment } from "../domain/assignment";
import { Subject } from "../domain/subject";
import { SqlizeConnection } from "../main";

export class SubjectDAO { 
    private connection;
    constructor() { 
        this.connection = new SqlizeConnection();
    }
    

    async synchronize() { 
        await Subject.sync({alter:true});
    }

    async getSubjectById(subjectId):Promise<Model> { 
        return await Subject.findByPk(subjectId, {include:Assignment});
    }

    async insertSubject(object):Promise<Model> { 
        return await Subject.create(object);
    }

    async deleteSubject(subjectId):Promise<number> { 
        return await Subject.destroy({where: { 
            id:subjectId
        }});
    }
}