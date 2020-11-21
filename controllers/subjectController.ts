import { StudentDAO } from "../dao/studentDAO";
import { SubjectDAO } from "../dao/subjectDAO";


export class SubjectController { 

    static subjectDAO:SubjectDAO = new SubjectDAO();



    static async getSubjectById(subjectId) { 
        let subjectResult;
        await this.subjectDAO.getSubjectById(subjectId).then(result => subjectResult = JSON.parse(result), err => {
            throw new Error(err)
        });
        return subjectResult;
    }

    static async addSubject(object) { 
        let subjectResult;
        await this.subjectDAO.insertSubject(object).then(result => { 
            subjectResult = result;
        }, err => { 
            throw new Error(err);
        });
        return subjectResult;
    }
}