import {Model, DataTypes} from 'sequelize';

import db from '../services/db';

class Users extends Model {

}

Users.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            return undefined
        }
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    },
    phone: {
        type: DataTypes.INTEGER,
         allowNull: false,
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: db,
    tableName: 'users',
    modelName: 'users',
});

export default Users;
