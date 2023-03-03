const jwt = require('jsonwebtoken');
const userService = require('../service/user.service');

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const token = req.header('Authorization');
  // console.log(token);
  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }

  try {
    const { data: { userId } } = jwt.verify(token, secret);
    // console.log(userId);

    const user = await userService.getById(userId);
    
    //  console.log(user);
    if (!user) {
      return res.status(401).send({ message: 'Expired or invalid token' });
    }

    req.user = user;
    next();
  } catch (err) {
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    // console.log(err.message);
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;