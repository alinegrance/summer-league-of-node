const userService = require('../service/user.service');
const { CREATED, OK, NO_CONTENT } = require('../utils/status-codes');

const getAll = async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).send(users);
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const { type, message } = await userService.createUser(username, email, password);
  if (type) {
    return res.status(400).send(message);
  }
  res.sendStatus(CREATED);
};

const getUser = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const response = await userService.getUserWithCharacters(id);
  // console.log(response);
  res.status(OK).send(response);
};

const addCharacter = async (req, res) => {
  const { id: characterId } = req.params;
  const { userId } = req.body;

  const { type, message } = await userService.addCharacter(userId, characterId);
  if (type) {
    return res.status(400).send(message);
  }
  res.sendStatus(CREATED);
};

const updateMastery = async (req, res) => {
  const { userId } = req.body;
  const { id: characterId } = req.params;
  const { type, message } = await userService.updateMastery(userId, characterId);

  if (type) {
    return res.status(400).send(message);
  }
  res.status(200).send(message);
};

const deleteUser = async (req, res) => {
  const { userId } = req.body;
  await userService.deleteUser(userId);
  res.sendStatus(NO_CONTENT);
};

module.exports = { getAll, createUser, getUser, addCharacter, updateMastery, deleteUser };