'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Collections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique:true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      videoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true,
        references: {model: 'Videos'}
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true,
        references: {model: 'Users'}
      },
      videoDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'Videos'}
      },
      videoName: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'Videos'}
      },
      videoComments: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'Videos'}
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'Users'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Collections');
  }
};
