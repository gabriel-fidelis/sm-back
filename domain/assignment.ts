import { DataTypes } from "sequelize";
import { SqlizeConnection } from "../main";
import { Subject } from "./subject";

export const Assignment = new SqlizeConnection().sqlize.define('Assignment', { 
    name: { 
        type:DataTypes.STRING,
        allowNull:false
    },
    grade: { 
        type:DataTypes.DECIMAL,
        allowNull:true
    }
}, {timestamps:false})