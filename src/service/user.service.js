const userModel = require('../model/user.model');

const getAll = async () => {
  const users = await userModel.getAll();
  return users;
};

module.exports = { getAll };