'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skins', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      characterId :{
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'character_id',
        references: {
          model: 'characters',
          key:'id'
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('skins')
  }
};
