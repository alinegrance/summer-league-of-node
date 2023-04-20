const Joi = require('joi');

const userJoi = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
}).required();

module.exports = {
  userJoi,
}