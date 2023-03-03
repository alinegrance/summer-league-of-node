const userService = require('../service/user.service');
const { NOT_FOUND, OK, CREATED, BAD_REQUEST, NO_CONTENT } = require('../utils/status-codes');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
}


const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userService.login(username, password);
  
  if(!user) {
    return res.status(400).send({message: 'Invalid fields'})
  }

  const token = jwt.sign({data: {userId: user.id}}, secret, jwtConfig);

  res.status(OK).send({token});
  
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const response = await userService.createUser(username, email, password);

  if (response.type) {
    return res.status(BAD_REQUEST).send({ message: response.message }); 
  }
  
  const newUserId = response.dataValues.id;

  const token = jwt.sign({data: {userId: newUserId}}, secret, jwtConfig);

  res.status(CREATED).send({ token });
};

const getUserWithCharacters = async (req, res) => {
  const { id } = req.user;

  const userWithCharacters = await userService.getUserWithCharacters(id);

  res.status(OK).send(userWithCharacters);
};

const addCharacter = async (req, res) => {
  const { userId } = req.body;
  const { id: characterId } = req.params;

  const { type, message } = await userService.addCharacter(userId, characterId);
  if (type) {
    return res.status(NOT_FOUND).send({ message });
  }
  res.sendStatus(CREATED);
};

const updateMastery = async (req, res) => {
const {id: userId} = req.user;
  const { id: characterId } = req.params;
 
  const response = await userService.updateMastery(userId, characterId);
  // console.log(response);
  if(!response) {
    return res.status(BAD_REQUEST).send({message: 'Character invalid'});
  }

  res.status(OK).send({message: 'Mastery updated by 1'});
};

const deleteUser = async (req, res) => {
  const { userId } = req.body;
  await userService.deleteUser(userId);
  res.sendStatus(NO_CONTENT);
};

module.exports = { 
  login, createUser, getUserWithCharacters, addCharacter, updateMastery, deleteUser };