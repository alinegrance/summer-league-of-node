'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('user_acquired_characters', [
    {
      user_id: 1,
      character_id: 1,
      mastery:1 
    },
    {
      user_id: 1,
      character_id: 2,
      mastery:5 
    },
    {
      user_id: 2,
      character_id: 3,
      mastery:3 
    },
    {
      user_id: 3,
      character_id: 4,
      mastery:7 
    },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('user_acquired_characters', null, {})
};
