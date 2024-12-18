const joi = require("joi");

const createValidation = joi.object({
  name: joi.string().min(3).max(34),
  username: joi.string().min(6).max(34).required(),
  email: joi.string().email(),
  password: joi.string().min(8).max(18).required(),
});
const updateValidation = joi.object({
  name: joi.string().min(3).max(34),
  username: joi.string().min(6).max(34).required(),
  email: joi.string().email(),
});
const removeValidation = joi.object({
  username: joi.string().min(6).max(34).required(),
});

const createAdmin = async (req, res, next) => {
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
const updateAdmin = async (req, res, next) => {
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
const removeAdmin = async (req, res, next) => {
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
module.exports = { createAdmin, updateAdmin, removeAdmin };
