'use strict';

import {
  Model, UUID, UUIDV4
} from 'sequelize';

interface UserAttributes {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {

    _id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    phoneNumber!: string;

    static associate(models: any) {
      // define association here
    }
  };
  User.init({
    _id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};