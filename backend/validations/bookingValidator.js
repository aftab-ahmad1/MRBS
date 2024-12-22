const joi = require("joi");
const responseHandler = require("../responseHandler");

const createValidation = joi.object({
  status: joi.string().min(3).max(34),
});
const getAllValidation = joi.object({
  pageNo: joi.number().min(1).default(1).required(),
  limit: joi.number().valid(5, 10, 15).default(5).required(),
  order: joi.string().valid("ASC", "DESC"),
  orderBy: joi.string().valid("createdAt", "status"),
  status: joi.string().max(34),
  bookingID: joi.string().max(64),
});
const getValidation = joi.object({
  bookingID: joi.string().max(64).required(),
  //status: joi.string().max(34).required(),
});
const updateValidation = joi.object({
  bookingID: joi.string().max(64).required(),
  status: joi.string().min(3).max(34),
});
const removeValidation = joi.object({
  bookingID: joi.string().min(6).max(64).required(),
});

const createBooking = async (req, res, next) => {
  console.log("Validation Check");
  try {
    await createValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const getBooking = async (req, res, next) => {
  try {
    await getValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const getBookings = async (req, res, next) => {
  try {
    await getAllValidation.validateAsync(req.query);
    next();
  } catch (error) {
    console.log("check", error);

    return responseHandler(res, { error: error.message });
  }
};
const updateBooking = async (req, res, next) => {
  try {
    await updateValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const removeBooking = async (req, res, next) => {
  try {
    await removeValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
module.exports = {
  createBooking,
  updateBooking,
  removeBooking,
  getBooking,
  getBookings,
};
