'use strict';

import {
  DataType,
  Model, Sequelize, UUID, UUIDV4, STRING
} from 'sequelize';

import db from './index'

let sequelize = db.sequelize
interface UserAttributes {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}

export class User extends Model<UserAttributes> implements UserAttributes {
  _id!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  phoneNumber!: string;
};
User.init({
  _id: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  firstName: STRING,
  lastName: STRING,
  email: STRING,
  phoneNumber: STRING
},
{
  sequelize,
  modelName: 'User',
})

// module.exports = (sequelize: Sequelize, DataTypes: DataType) => {
//   class User extends Model<UserAttributes> implements UserAttributes {

//     _id!: string;
//     firstName!: string;
//     lastName!: string;
//     email!: string;
//     phoneNumber!: string;

//     static associate(models: any) {
//       // define association here
//     }
//   };
//   User.init({
//     _id: {
//       type: UUID,
//       defaultValue: UUIDV4,
//       allowNull: false,
//       primaryKey: true
//     },
//     firstName: STRING,
//     lastName: STRING,
//     email: STRING,
//     phoneNumber: STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };