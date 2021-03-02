import { Assignment } from "../domain/assignment";
import { SqlizeConnection } from "../main";

export class AssignmentDAO { 
    private connection:SqlizeConnection; 
    
    constructor() { 
        this.connection = new SqlizeConnection();
    }

    async synchronize() { 
        Assignment.sync({alter: true});
    }

    async getAssignmentsFromSubject(subjectId) { 
        return await Assignment.findAll({where: { 
            SubjectId:subjectId
        }}).then(found => { 
            if (found === null) { 
                throw new Error("Assignment not found");
            }

            return JSON.stringify(found);
        }, err => {
            throw new Error(err);
        })
    }

    async insertAssignment(object) { 
        return await Assignment.create(object).then(createdAssignment => { 
            return JSON.stringify(createdAssignment);
        }, err => { 
            throw new Error(err);
        })
    }
}