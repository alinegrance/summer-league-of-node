const userModel = require('../model/user.model');
const tokenGen = require('../utils/random');

const login = async (username, password) => {
  const existUser = await userModel.getUser(username, password);
  if (!existUser) {
    return { message: 'User not registered' };
  } 
  const token = tokenGen();
  return { token };
};

module.exports = { login };