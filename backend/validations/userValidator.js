const joi = require("joi");

const createValidation = joi.object({
  name: joi.string().min(3).max(34),
  username: joi.string().min(6).max(34).required(),
  email: joi.string().email(),
  password: joi.string().min(8).max(18).required(),
});
const getValidation = joi.object({
  userID: joi.string().max(64).required(),
  username: joi.string().max(34).required(),
});
const updateValidation = joi.object({
  name: joi.string().min(3).max(34),
  username: joi.string().min(6).max(34).required(),
  email: joi.string().email(),
});
const removeValidation = joi.object({
  username: joi.string().min(6).max(34).required(),
});

const createUser = async (req, res, next) => {
  try {
    await createValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return res.send({
      status: 400,
      message: "Validation Error",
      data: {},
      error: error.message,
    });
  }
};
const getUser = async (req, res, next) => {
  try {
    await getValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return res.send({
      status: 400,
      message: "Validation Error",
      data: {},
      error: error.message,
    });
  }
};
const updateUser = async (req, res, next) => {
  try {
    await updateValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return res.send({
      status: 400,
      message: "Validation Error",
      data: {},
      error: error.message,
    });
  }
};
const removeUser = async (req, res, next) => {
  try {
    await removeValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return res.send({
      status: 400,
      message: "Validation Error",
      data: {},
      error: error.message,
    });
  }
};
module.exports = { createUser, updateUser, removeUser, getUser };
