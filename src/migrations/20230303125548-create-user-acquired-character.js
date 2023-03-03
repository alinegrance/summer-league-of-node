'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_acquired_characters', {
      userId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      characterId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'character_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'characters',
          key: 'id',
        }
      },
      mastery: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_acquired_characters');
  }
};
