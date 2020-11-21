"use strict";
exports.__esModule = true;
exports.Enrollment = void 0;
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
var student_1 = require("./student");
var subject_1 = require("./subject");
exports.Enrollment = new main_1.SqlizeConnection().sqlize.define("Enrollment", {
    result: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true
    }
}, { timestamps: false });
student_1.Student.belongsToMany(subject_1.Subject, { through: exports.Enrollment });
subject_1.Subject.belongsToMany(student_1.Student, { through: exports.Enrollment });
