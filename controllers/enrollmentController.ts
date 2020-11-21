import { enrollmentDAO } from "../dao/enrollmentDAO";
import { StudentDAO } from "../dao/studentDAO";
import { SubjectDAO } from "../dao/subjectDAO";

export class enrollmentController { 
    static enrollmentDAO = new enrollmentDAO();

    static async enrollStudent(object) { 
        let enrollment;
        await this.enrollmentDAO.enrollStudent(object).then(createdEnrollment => { 
            enrollment = JSON.parse(createdEnrollment);
        }, err => { 
            throw new Error(err);
        });
        return enrollment;
    }
}