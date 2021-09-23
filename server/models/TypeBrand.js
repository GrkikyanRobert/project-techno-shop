import {Model, DataTypes} from 'sequelize';

import db from '../services/db';
import {Type, Brand} from "./index";

class TypeBrand extends Model {

}

TypeBrand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    sequelize: db,
    tableName: 'typeBrand',
    modelName: 'typeBrand',
});



export default TypeBrand;
