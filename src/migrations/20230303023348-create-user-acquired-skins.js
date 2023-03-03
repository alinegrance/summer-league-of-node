'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_acquired_skins', {
      userId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      skinId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'skin_id',
        onDelete: 'CASCADE',
        references: {
          model: 'skins',
          key: 'id',
        }
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_acquired_skins');
  }
};
