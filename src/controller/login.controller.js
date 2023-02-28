const loginService = require('../service/login.service');

const login = async (req, res) => {
  const { username, password } = req.body;
  const response = await loginService.login(username, password);
  if (response.message) {
    return res.status(404).send({ message: response.message });
  }
  res.status(200).send({ token: response.token });
};

module.exports = { login };