const userModel = require('../model/user.model');

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

module.exports = { getAll, createUser };