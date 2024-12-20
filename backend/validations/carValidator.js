const joi = require("joi");
const responseHandler = require("../responseHandler");

const createValidation = joi.object({
  name: joi.string().min(3).max(34),
  brand: joi.string().min(3).max(34),
  type: joi.string().min(3).max(34),
  model: joi.string().min(3).max(34),
  carNo: joi.string().min(3).max(34).required(),
  engine: joi.string().min(3).max(34),
  gearBox: joi.string().min(3).max(34),
  fuel: joi.string().min(3).max(34),
  seats: joi.number(),
  airConditioner: joi.string().min(2).max(3),
  price: joi.number(),
});
const getAllValidation = joi.object({
  pageNo: joi.number().min(1).default(1).required(),
  limit: joi.number().valid(5, 10, 15).default(5).required(),
  order: joi.string().valid("ASC", "DESC"),
  orderBy: joi.string().valid("createdAt", "username", "email", "name"),
  name: joi.string().min(3).max(34),
  carNo: joi.string().min(3).max(34),
  brand: joi.string().min(3).max(34),
});
const getValidation = joi.object({
  carID: joi.string().max(64).required(),
  carNo: joi.string().max(34).required(),
});
const updateValidation = joi.object({
  carID: joi.string().max(64).required(),
  name: joi.string().min(3).max(34),
  brand: joi.string().min(3).max(34),
  type: joi.string().min(3).max(34),
  model: joi.string().min(3).max(34),
  carNo: joi.string().min(3).max(34).required(),
  engine: joi.string().min(3).max(34),
  gearBox: joi.string().min(3).max(34),
  fuel: joi.string().min(3).max(34),
  seats: joi.number(),
  airConditioner: joi.string().min(2).max(3),
  price: joi.number(),
});
const removeValidation = joi.object({
  carNo: joi.string().min(3).max(34).required(),
});

const createCar = async (req, res, next) => {
  try {
    await createValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const getCar = async (req, res, next) => {
  try {
    await getValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const getCars = async (req, res, next) => {
  try {
    await getAllValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const updateCar = async (req, res, next) => {
  try {
    await updateValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const removeCar = async (req, res, next) => {
  try {
    await removeValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
module.exports = {
  createCar,
  updateCar,
  removeCar,
  getCar,
  getCars,
};
