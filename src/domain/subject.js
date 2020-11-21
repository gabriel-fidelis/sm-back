"use strict";
exports.__esModule = true;
exports.Subject = void 0;
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
exports.Subject = new main_1.SqlizeConnection().sqlize.define("Subject", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    result: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true
    }
}, { timestamps: false });
