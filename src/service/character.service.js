const {Character} = require('../models')

const getAll = async() => {
  const allCharacters = await Character.findAll();
  return allCharacters;
}

module.exports = {getAll}