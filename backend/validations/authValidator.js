const joi = require("joi");
const responseHandler = require("../responseHandler");

const loginValidation = joi.object({
  username: joi.string().min(6).max(34).required(),
  password: joi.string().min(8).max(18).required(),
});

const Login = async (req, res, next) => {
  try {
    await loginValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

module.exports = {
  Login,
};
