import { DataTypes } from "sequelize";
import { SqlizeConnection } from "../main";
import { Student } from "./student";
import { Subject } from "./subject";

export const Enrollment = new SqlizeConnection().sqlize.define("Enrollment", {
    result:{
        type:DataTypes.DECIMAL,
        allowNull:true
    }
}, {timestamps:false});
Student.belongsToMany(Subject, {through:Enrollment});
Subject.belongsToMany(Student, {through:Enrollment});