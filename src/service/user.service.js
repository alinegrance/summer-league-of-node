const {User, Character, UserAcquiredCharacter} = require('../models');

const login = async (username, password) => {
  const user = await User.findOne({where: {username, password}})
  return user;
};

const getById = async (userId) => {
  const user = await User.findOne({where: {id: userId}});
  // console.log('>>>>>>>>>>>>>>>>>>>>>');
  // console.log(user);
  return user;
}

const createUser = async (username, email, password) => {
  try{
    const newUser = await User.create({username, email, password});
    return newUser;
  } catch(e) {
    return {type: 'error', message:'email or username already registered'}
  }
};

const getUserWithCharacters = async (userId) => {
  const userWithCharacters = await User.findOne({
    where: {id: userId},
    include: [
      {model: Character, as: 'characters', through: {attributes:[]}}
    ]
  })
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
  login, getById, createUser, getUserWithCharacters, addCharacter, updateMastery, deleteUser };