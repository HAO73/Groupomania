'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'id'

        },
      },
      messageId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Messages',
          key:'id'

        },
      },
      username:{
        allowNull: false,
        type: Sequelize.STRING
      },
       content: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Comments');
  }
};