// import { Model, DataTypes } from 'sequelize';
//
// import db from '../services/db';
// import {User, Device} from "./index";
//
// class Rating extends Model {
//
// }
//
// Rating.init({
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     rate: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
// }, {
//     sequelize: db,
//     tableName: 'Rating',
//     modelName: 'Rating',
// });
//
// Rating.belongsTo(User,{
//     foreignKey:'userId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'as_user',
// })
// User.hasMany(Rating,{
//     foreignKey:'userId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'as_rating',
// })
//
// Rating.belongsTo(Device,{
//     foreignKey:'deviceId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'as_device',
// })
// Device.hasMany(Rating,{
//     foreignKey:'deviceId',
//     onUpdate: 'cascade',
//     onDelete: 'cascade',
//     as: 'as_rating',
// })
//
// export default Rating;


import {Model, DataTypes} from 'sequelize';

import db from '../services/db';
import {User, Device} from "./index";

class Rating extends Model {

}

Rating.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deviceId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    sequelize: db,
    tableName: 'Rating',
    modelName: 'Rating',
});


export default Rating;
