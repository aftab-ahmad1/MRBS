const {
  createBooking,
  getAllBookings,
  getBooking,
  updateBooking,
  deleteBooking,
} = require("../database/models/bookingModel");
const responseHandler = require("../responseHandler");

const create = async (req, res) => {
  console.log("Controller Check");
  try {
    const booking = await createBooking(req.body);
    return responseHandler(res, booking);
  } catch (error) {
    console.log("controller check", error);
    return responseHandler(res, { error: error.message });
  }
};
const getAll = async (req, res) => {
  try {
    const { pageNo, limit } = req.query;
    const offset = (pageNo - 1) * limit;
    const booking = await getAllBookings(offset, req.query);
    return responseHandler(res, booking);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const get = async (req, res) => {
  try {
    const booking = await getBooking(req.query);
    return responseHandler(res, booking);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const update = async (req, res) => {
  try {
    const booking = await updateBooking(req.body);
    return responseHandler(res, booking);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const remove = async (req, res) => {
  try {
    const booking = await deleteBooking(req.query);
    return responseHandler(res, booking);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
module.exports = { create, getAll, update, remove, get };
