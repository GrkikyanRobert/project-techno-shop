import { Model, DataTypes } from 'sequelize';

import db from '../services/db';
import Basket from "./Basket";
import Device from "./Device";


class BasketAdmin extends Model {

}

BasketAdmin.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    count: {
        type: DataTypes.INTEGER,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    praductId:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    phone:{
        type:DataTypes.INTEGER,
    }

}, {
    sequelize: db,
    tableName: 'BasketAdmin',
    modelName: 'BasketAdmin',
});



export default BasketAdmin;
