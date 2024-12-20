const {
  createCar,
  getAllCars,
  getCar,
  updateCar,
  deleteCar,
} = require("../database/models/carModels");
const responseHandler = require("../responseHandler");

const create = async (req, res) => {
  try {
    const user = await createCar(req.body);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const getAll = async (req, res) => {
  try {
    const { pageNo, limit } = req.query;
    const offset = (pageNo - 1) * limit;
    const user = await getAllCars(offset, req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const get = async (req, res) => {
  try {
    const user = await getCar(req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const update = async (req, res) => {
  try {
    const user = await updateCar(req.body);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const remove = async (req, res) => {
  try {
    const user = await deleteCar(req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
module.exports = { create, getAll, update, remove, get };
