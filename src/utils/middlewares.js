const { BAD_REQUEST, UNAUTHORIZED } = require('./status-codes');

const validateLoginBody = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(BAD_REQUEST)
      .send({ message: 'username and password are required' });
  }
  next();
};

const validateCreateUserBody = (req, res, next) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(BAD_REQUEST)
      .send({ message: 'email, username and password are required' });
  }
  next();
};

// const validateAuth = async (req, res, next) => {
//   const token = req.header('authorization');
//   if (!token) {
//     return res.sendStatus(UNAUTHORIZED);
//   }
//   next();
// };

module.exports = {
  validateLoginBody, 
  validateCreateUserBody, 
  // validateAuth, 
};