import { StudentDAO } from "../dao/studentDAO";
import { SubjectDAO } from "../dao/subjectDAO";


export class SubjectController { 

    private static subjectDAO:SubjectDAO = new SubjectDAO();



    static async getSubjectById(subjectId) { 
        return await this.subjectDAO.getSubjectById(subjectId).then(result => {
            if (result === null) { 
                throw new Error("Matéria não encontrada.");
            }
        
            return JSON.parse(JSON.stringify(result))
            
        }, err => {
            throw new Error(err)
        });
    }

    static async addSubject(object) { 
        return await this.subjectDAO.insertSubject(object).then(result => { 
            return JSON.parse(JSON.stringify(object))
        }, err => { 
            throw new Error(err);
        });
    }

    static async deleteSubject(subjectId) {
        return this.subjectDAO.deleteSubject(subjectId);
    }
}