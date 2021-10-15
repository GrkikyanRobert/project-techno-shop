import { Model, DataTypes } from 'sequelize';

import db from '../services/db';
import Basket from "./Basket";
import Device from "./Device";


class BasketAdmin extends Model {

}

BasketAdmin.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    count: {
        type: DataTypes.BIGINT,
    },
    userId:{
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    praductId:{
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    phone:{
        type:DataTypes.BIGINT,
    }

}, {
    sequelize: db,
    tableName: 'BasketAdmin',
    modelName: 'BasketAdmin',
});



export default BasketAdmin;
