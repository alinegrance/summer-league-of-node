'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('characters', [
    {
      name: 'Annie',
    },
    {
      name: 'Rell',
    },
    {
      name: 'Cassiopeia',
    },
    {
      name: 'Maokai',
    },
  ]),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('characters', null, {})
  }
};
