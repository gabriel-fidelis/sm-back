"use strict";
exports.__esModule = true;
exports.SubjectDAO = void 0;
var main_1 = require("../main");
var SubjectDAO = /** @class */ (function () {
    function SubjectDAO() {
        this.connection = new main_1.SqlizeConnection();
    }
    return SubjectDAO;
}());
exports.SubjectDAO = SubjectDAO;
