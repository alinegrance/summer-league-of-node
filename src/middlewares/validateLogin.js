const {readJson} = require('../utils/fs-utils')

module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  const users = await readJson('../files/users.json');
  if (!username) {
    return res.status(400).json({ message: 'username must be passed'})
  }
  if (!password) {
    return res.status(400).json({ message: 'password must be passed'})
  }
  if (!users.some((user) => user.username === username)) {
    return res.status(404).json({ message: 'username not found'});
  }
  const user = users.find((currUser) => currUser.username === username);
  if (user.password !== password) {
    return res.status(400).json({ message: 'incorrect password'});
  }
  return next();
};