import { StudentDAO } from "../dao/studentDAO";
import { SubjectDAO } from "../dao/subjectDAO";


export class StudentController { 

    static subjectDAO:SubjectDAO = new SubjectDAO();
    
}