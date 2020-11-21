import { DataTypes } from "sequelize";
import { SqlizeConnection } from "../main";



export const Subject = new SqlizeConnection().sqlize.define("Subject", { 
    name: { 
        type:DataTypes.STRING,
        allowNull:false
    }
}, {timestamps:false})