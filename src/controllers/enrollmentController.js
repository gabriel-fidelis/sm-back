"use strict";
exports.__esModule = true;
exports.enrollmentController = void 0;
var enrollmentDAO_1 = require("../dao/enrollmentDAO");
var enrollmentController = /** @class */ (function () {
    function enrollmentController() {
    }
    enrollmentController.enrollmentDAO = new enrollmentDAO_1.enrollmentDAO();
    return enrollmentController;
}());
exports.enrollmentController = enrollmentController;
