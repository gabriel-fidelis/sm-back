"use strict";
exports.__esModule = true;
exports.StudentController = void 0;
var subjectDAO_1 = require("../dao/subjectDAO");
var StudentController = /** @class */ (function () {
    function StudentController() {
    }
    StudentController.subjectDAO = new subjectDAO_1.SubjectDAO();
    return StudentController;
}());
exports.StudentController = StudentController;
