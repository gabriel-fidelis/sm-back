import { DataTypes } from "sequelize";
import { SqlizeConnection } from "../main";
import { Assignment } from "./assignment";


export const Subject = new SqlizeConnection().sqlize.define("Subject", { 
    name: { 
        type:DataTypes.STRING,
        allowNull:false
    }
}, {timestamps:false})
Subject.hasMany(Assignment);