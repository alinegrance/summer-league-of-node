const userService = require('../service/user.service');
const { NOT_FOUND, OK, CREATED, BAD_REQUEST, NO_CONTENT } = require('../utils/status-codes');

const login = async (req, res) => {
  const { username, password } = req.body;
  const response = await userService.login(username, password);
  if (response.message) {
    return res.status(NOT_FOUND).send({ message: response.message });
  }

  return res.status(OK).send({ token: response.token });
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const { type, message } = await userService.createUser(username, email, password);
  if (type) {
    return res.status(BAD_REQUEST).send({ message }); 
  }
  res.status(CREATED).send({ token: message });
};

const getUserWithCharacters = async (req, res) => {
  const { userId } = req.body;
  const userWithCharacters = await userService.getUserWithCharacters(userId);
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
  const { userId } = req.body;
  const { id: characterId } = req.params;

  const { type, message } = await userService.updateMastery(userId, characterId);
  console.log(type, message);
  if (type) {
    return res.status(NOT_FOUND).send({ message });
  }
  res.status(OK).send({ message });
};

const deleteUser = async (req, res) => {
  const { userId } = req.body;
  await userService.deleteUser(userId);
  res.sendStatus(NO_CONTENT);
};

module.exports = { 
  login, createUser, getUserWithCharacters, addCharacter, updateMastery, deleteUser };