const userModel = require('../model/user.model');
const userCharacterModel = require('../model/userCharacter.model');

const getAll = async () => {
  const users = await userModel.getAll();
  return users;
};

const createUser = async (username, email, password) => {
  const result = await userModel.createUser(username, email, password);
  if (result.message) {
    return { type: 'error', message: result.message };
  }
  return { type: null, message: 'Created' };
};

const getUserWithCharacters = async (id) => {
  const result = await userModel.getUserWithCharacters(id);
  // console.log(result);
  return result;
};

const addCharacter = async (userId, characterId) => {
  const result = await userCharacterModel.addCharacter(userId, characterId);
  if (result.message) {
    return { type: 'error', message: result.message };
  }
  return { type: null, message: 'Created' };
};

const updateMastery = async (userId, characterId) => {
  const result = await userCharacterModel.updateMastery(userId, characterId);
  if (result.message) {
    return { type: 'error', message: result.message };
  }
  const characterMastery = await userCharacterModel.getCharacterMastery(userId, characterId);
  return { type: null, message: characterMastery };
};

const deleteUser = async (userId) => {
  await userModel.deleteUser(userId);
  return { type: null, message: 'NO CONTENT' };
};

module.exports = { 
  getAll, createUser, getUserWithCharacters, addCharacter, updateMastery, deleteUser };
