"use strict";
exports.__esModule = true;
exports.Student = void 0;
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
exports.Student = new main_1.SqlizeConnection().sqlize.define("Student", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    registry: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[0-9]*$/g
        }
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, { timestamps: false });
