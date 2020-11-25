"use strict";
exports.__esModule = true;
exports.Assignment = void 0;
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
exports.Assignment = new main_1.SqlizeConnection().sqlize.define('Assignment', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    grade: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true
    }
}, { timestamps: false });
