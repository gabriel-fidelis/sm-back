"use strict";
exports.__esModule = true;
exports.getRoutes = void 0;
var enrollmentController_1 = require("../controllers/enrollmentController");
var studentController_1 = require("../controllers/studentController");
var subjectController_1 = require("../controllers/subjectController");
function getRoutes(app) {
    app.get("/", function (req, res) {
        res.send("Bem-vindo ao back-end do sistema de gerenciamento de estudantes!");
    });
    app.get('/students', function (req, res) {
        studentController_1.StudentController.getStudents().then(function (success) {
            res.json(success);
        }, function (err) {
            res.status(500).send("Internal Server Error: " + err);
        });
    });
    app.get('/students/:id', function (req, res) {
        studentController_1.StudentController.getStudentById(req.params.id).then(function (success) {
            res.json(success);
        }, function (err) {
            res.status(500).send("Internal Server Error: " + err);
        });
    });
    app.get('/subjects/:id', function (req, res) {
        subjectController_1.SubjectController.getSubjectById(req.params.id).then(function (success) {
            res.json(success);
        }, function (err) {
            res.status(500).send("Internal Server Error:" + err);
        });
    });
    app.post('/students/insert', function (req, res) {
        studentController_1.StudentController.createStudent(req.body).then(function (success) {
            res.json(success);
        }, function (err) {
            res.status(500).send("Internal Server Error: " + err);
        });
    });
    app.post('/students/enroll', function (req, res) {
        enrollmentController_1.enrollmentController.enrollStudent(req.body).then(function (success) {
            res.json(success);
        }, function (err) {
            res.status(500).send("Internal Server Error: " + err);
        });
    });
    app.post('/subjects/insert', function (req, res) {
        subjectController_1.SubjectController.addSubject(req.body).then(function (success) {
            res.json(success);
        }, function (err) {
            res.status(500).send("Internal Server Error: " + err);
        });
    });
}
exports.getRoutes = getRoutes;
