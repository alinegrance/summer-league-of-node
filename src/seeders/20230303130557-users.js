'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      username: 'bigBoss',
      email: 'bigboss@email.com',
      password: 'password123'
    },
    {
      username: 'teamTeemo',
      email: 'teamteemo@email.com',
      password: 'otherpassword123'
    },
    {
      username: 'newPlayer',
      email: 'newplayer@email.com',
      password: 'superpassword321'
    }
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
};
