import { Model, DataTypes } from 'sequelize';

import db from '../services/db';
import Device from "./Device";
import User from "./User";

class Basket extends Model {

}

Basket.init({
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
    tableName: 'basket',
    modelName: 'basket',
});

Basket.belongsTo(User,{
    foreignKey:'userId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'as_user',
})
// User.hasOne(Basket,{
//     foreignKey:'userId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'user_as',
// })
// Basket.belongsTo(Device,{
//     foreignKey:'ItmDeviceId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'as_device',
// })
// Device.hasOne(Basket,{
//     foreignKey:'ItmDeviceId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'as_device',
// })


export default Basket;
