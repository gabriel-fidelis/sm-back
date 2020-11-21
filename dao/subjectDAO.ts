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

    async getSubjectById(subjectId):Promise<string> { 
        return await Subject.findByPk(subjectId).then(found => { 
            if (found === null) { 
                throw new Error("Matéria não encontrada.");
            }
            return JSON.stringify(found);
        }, err => {
            throw new Error(err);
        })
    }

    async insertSubject(object):Promise<string> { 
        this.synchronize();
        return await Subject.create(object).then(createdSubject => { 
            return JSON.stringify(createdSubject);
        }, err => { 
            throw new Error(err);
        });
    }
}