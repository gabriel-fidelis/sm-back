import { DataTypes } from "sequelize";
import { SqlizeConnection } from "../main";



export const Subject = new SqlizeConnection().sqlize.define("Subject", { 
    name: { 
        type:DataTypes.STRING,
        allowNull:false
    },
    result: { 
        type:DataTypes.DECIMAL,
        allowNull:true
    }
}, {timestamps:false})