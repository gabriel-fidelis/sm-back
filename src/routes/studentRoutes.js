"use strict";
exports.__esModule = true;
exports.getRoutes = void 0;
var studentController_1 = require("../controllers/studentController");
function getRoutes(app) {
    app.get("/", function (req, res) {
        res.send("Bem-vindo ao back-end do sistema de gerenciamento de estudantes");
    });
    app.get('/students', function (req, res) {
        res.json(studentController_1.StudentController.getStudents());
    });
}
exports.getRoutes = getRoutes;
