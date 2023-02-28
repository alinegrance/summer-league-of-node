const userService = require('../service/user.service');
const { CREATED } = require('../utils/status-codes');

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

module.exports = { getAll, createUser };