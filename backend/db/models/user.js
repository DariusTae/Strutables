'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Collection, {foreignKey: 'userId'})
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
