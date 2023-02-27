const userService = require('../service/user.service');

const getAll = async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).send(users);
};

module.exports = { getAll };