const { User, Character, UserAcquiredCharacter } = require('../models');

const login = async (username, password) => {
 const user = await User.findOne({where: {username, password}});
 return user;
};

const createUser = async (username, email, password) => {
  try{
    const newUser = await User.create({username, email, password});
    return newUser;
  } catch(e) {
    return {type: 'error', message: e.message}
  }
};

const getById = async (userId) => {
  const user = await User.findByPk(userId);
  return user;
}

const getUserWithCharacters = async (userId) => {
  const userWithCharacters = await User.findAll({
    where: {id: userId},
    attributes:  {exclude: ['password', 'email']},
    include: {
      model: Character, as: 'characters', through: {attributes: ['mastery']}
    }
  });
  return userWithCharacters;
};

const addCharacter = async (userId, characterId) => {
  try{
    const response = await UserAcquiredCharacter.create({userId, characterId});
    return response;
  } catch(e) {
    return {type: 'error', message: e.message}
  }
  
};

const updateMastery = async (userId, characterId) => {
    const [[, response ]] = await UserAcquiredCharacter.increment(
      {mastery: 1},
      {where: {userId, characterId}});
  
    return response;
};

const deleteUser = async (userId) => {
  await User.destroy({
    where: {id: userId}
  });
};

module.exports = { 
  login, createUser, getById, getUserWithCharacters, addCharacter, updateMastery, deleteUser };