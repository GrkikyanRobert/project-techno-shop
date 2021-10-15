import {Model, DataTypes} from 'sequelize';

import db from '../services/db';
class TypeBrand extends Model {

}

TypeBrand.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    sequelize: db,
    tableName: 'typeBrand',
    modelName: 'typeBrand',
});



export default TypeBrand;
