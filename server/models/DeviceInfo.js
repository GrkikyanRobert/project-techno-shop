import { Model, DataTypes } from 'sequelize';

import db from '../services/db';
import {Device} from "./index";

class DeviceInfo extends Model {

}

DeviceInfo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize: db,
    tableName: 'deviceInfo',
    modelName: 'deviceInfo',
});



DeviceInfo.belongsTo(Device,{
    foreignKey: 'deviceId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'aaa'
})

Device.hasMany(DeviceInfo, {
    foreignKey: 'deviceId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'info'
});


export default DeviceInfo;
