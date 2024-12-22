const joi = require("joi");
const responseHandler = require("../responseHandler");

const createValidation = joi.object({
  name: joi.string().min(3).max(34),
  username: joi.string().min(6).max(34).required(),
  email: joi.string().email(),
  password: joi.string().min(8).max(18).required(),
  CNIC: joi.string().min(11).max(15).required(),
  phoneNo: joi.string().min(11).max(11).required(),
  address: joi.string().min(5).max(34),
  city: joi.string().min(3).max(20),
  picture: joi.string().min(3).max(50),
});
const getAllValidation = joi.object({
  pageNo: joi.number().min(1).default(1).required(),
  limit: joi.number().valid(5, 10, 15).default(5).required(),
  order: joi.string().valid("ASC", "DESC"),
  orderBy: joi.string().valid("createdAt", "username", "email", "name"),
  name: joi.string().min(3).max(34),
  username: joi.string().min(6).max(34),
  email: joi.string().email(),
  CNIC: joi.string().min(11).max(15),
});
const getValidation = joi.object({
  userID: joi.string().max(64).required(),
  username: joi.string().max(34).required(),
});
const updateValidation = joi.object({
  userID: joi.string().max(64).required(),
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
    return responseHandler(res, { error: error.message });
  }
};
const getUser = async (req, res, next) => {
  try {
    await getValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const getUsers = async (req, res, next) => {
  try {
    await getAllValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const updateUser = async (req, res, next) => {
  try {
    await updateValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const removeUser = async (req, res, next) => {
  try {
    await removeValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
module.exports = {
  createUser,
  updateUser,
  removeUser,
  getUser,
  getUsers,
};
