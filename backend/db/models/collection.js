'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Collection.belongsTo(models.User, {foreignKey: 'userId'})
      Collection.belongsTo(models.Video, {foreignKey: 'videoId'})
    }
  };
  Collection.init({
    name: DataTypes.STRING,
    videoId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    videoDescription: DataTypes.STRING,
    videoName: DataTypes.STRING,
    videoComments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};
