const Character = require('../service/character.service')

const getAll = async(req, res) => {
  const allCharacters = await Character.getAll();
  res.status(200).send(allCharacters);
}

module.exports = {getAll}