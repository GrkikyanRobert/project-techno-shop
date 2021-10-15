import {Model, DataTypes} from 'sequelize';

import db from '../services/db';



class Type extends Model {

}

Type.init({
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
    tableName: 'type',
    modelName: 'type',
});


// Type.belongsToMany(Brand, {through: TypeBrand})

export default Type;
