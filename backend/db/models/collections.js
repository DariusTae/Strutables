'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Collections.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    videoId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    videoDescription: DataTypes.STRING,
    videoName: DataTypes.STRING,
    videoComments: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collections',
  });
  return Collections;
};