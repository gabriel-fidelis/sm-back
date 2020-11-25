import { AssignmentDAO } from "../dao/assignmentDAO";

export class AssignmentController { 
    private static assignmentDAO = new AssignmentDAO();

    static async getAssignmentsFromSubject(subjectId) { 
        let foundAssignments;
        await this.assignmentDAO.getAssignmentsFromSubject(subjectId).then(assignments => { 
            foundAssignments = JSON.parse(assignments);
        }, err => { 
            throw new Error(err);
        })
        return foundAssignments;
    }
    static async insertAssignment(object) { 
        let createdAssignment;
        await this.assignmentDAO.insertAssignment(object).then(created => { 
            createdAssignment = JSON.parse(created);
        }, err => { 
            throw new Error(err)
        })
        return createdAssignment;
    }
}