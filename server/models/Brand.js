import {Model, DataTypes} from 'sequelize';

import db from '../services/db';
// import Device from "./Device";
import Type from "./Type";
import TypeBrand from "./TypeBrand";

class Brand extends Model {

}

Brand.init({
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
}, {
    sequelize: db,
    tableName: 'brand',
    modelName: 'brand',
});



Brand.belongsToMany(Type, {through: TypeBrand})

export default Brand;
