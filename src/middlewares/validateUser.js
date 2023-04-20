const { readJson } = require('../utils/fs-utils');
const {userJoi} = require('./validations/schema');

module.exports = async (req, res, next) => {
  const { email, username, password } = req.body;
  const validatingFields = userJoi.validate({ email, username, password })
  if (validatingFields.error) {
    const { error } = validatingFields
    return res.status(400).json({ message: error.message});
  }
  const users = await readJson('../files/users.json');
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: 'this email already exists'})
  }
  return next();
} 