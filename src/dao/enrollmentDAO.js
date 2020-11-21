"use strict";
exports.__esModule = true;
exports.enrollmentDAO = void 0;
var main_1 = require("../main");
var enrollmentDAO = /** @class */ (function () {
    function enrollmentDAO() {
        this.connection = new main_1.SqlizeConnection();
    }
    return enrollmentDAO;
}());
exports.enrollmentDAO = enrollmentDAO;
