const userModel = require('../model/user.model');
const userCharacterModel = require('../model/userCharacter.model');
const tokenGen = require('../utils/random');

const login = async (username, password) => {
  const existUser = await userModel.login(username, password);
  if (!existUser) {
    return { message: 'User not found' };
  }
  const token = tokenGen();
  return { token };
};

const createUser = async (username, email, password) => {
  const response = await userModel.createUser(username, email, password);
  if (response.message) {
    return { type: 'error', message: response.message };
  }
  const token = tokenGen();
  return { type: null, message: token };
};

const getUserWithCharacters = async (userId) => {
  const userWithCharacters = await userModel.getUserWithCharacters(userId);
  return userWithCharacters;
};

const addCharacter = async (userId, characterId) => {
  const response = await userCharacterModel.addCharacter(userId, characterId);
  if (response.message) {
    return { type: 'error', message: response.message };
  }
  return { type: null, message: 'Created' };
};

const updateMastery = async (userId, characterId) => {
  const response = await userCharacterModel.updateMastery(userId, characterId);
  // console.log(response);
  if (!response) {
    return { type: 'error', message: 'Character not found' };
  }
  return { type: null, message: 'OK' };
};

const deleteUser = async (userId) => {
  await userModel.deleteUser(userId);
};

module.exports = { 
  login, createUser, getUserWithCharacters, addCharacter, updateMastery, deleteUser };