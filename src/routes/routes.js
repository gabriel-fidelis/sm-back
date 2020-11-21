"use strict";
exports.__esModule = true;
exports.getRoutes = void 0;
var studentController_1 = require("../controllers/studentController");
function getRoutes(app) {
    app.get("/", function (req, res) {
        res.send("Bem-vindo ao back-end do sistema de gerenciamento de estudantes!");
    });
    app.get('/students', function (req, res) {
        studentController_1.StudentController.getStudents().then(function (result) {
            res.json(result);
        }, function (err) {
            res.status(500).send("Internal Server Error: " + err);
        });
    });
    app.post('/students/insert', function (req, res) {
        studentController_1.StudentController.createStudent(req.body).then(function (createdStudent) {
            res.json(createdStudent);
        }, function (err) {
            res.status(500).send("Internal Server Error: " + err);
        });
    });
}
exports.getRoutes = getRoutes;
