import {Model, DataTypes} from 'sequelize';

import db from '../services/db';
import Type from "./Type";
import Brand from "./Brand";
import Basket from "./Basket";


class Device extends Model {

}

Device.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    rating: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
        get() {
            const img = this.getDataValue('img');
            if (img !== undefined) {
                return img;
            }
            return undefined;
        }
    }
    ,
}, {
    sequelize: db,
    tableName: 'device',
    modelName: 'device',
});

Device.belongsTo(Type, {
    foreignKey: 'typeId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'as_type',
})

Type.hasMany(Device, {
    foreignKey: 'typeId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'as_device',
})
Device.belongsTo(Brand, {
    foreignKey: 'brandId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'as_brand',
})

Brand.hasMany(Device, {
    foreignKey: 'brandId',
    onUpdate: 'cascade',
    onDelete: 'cascade',
    as: 'as_device',
})

// Device.belongsTo(Basket, {
//     targetKey: 'device_basket_Id',
//     foreignKey: 'baskedId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'basket_device',
// })
//
// Basket.hasMany(Device, {
//     targetKey: 'device_basket_Id',
//     foreignKey: 'baskedId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'device_basket',
// })


export default Device;
