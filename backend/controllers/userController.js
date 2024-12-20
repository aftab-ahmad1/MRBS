const {
  createUser,
  getAllUser,
  getUser,
} = require("../database/models/userModel");
const responseHandler = require("../responseHandler");

const create = async (req, res) => {
  try {
    const user = await createUser(req.body);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const getAll = async (req, res) => {
  try {
    const { pageNo, limit } = req.query;
    const offset = (pageNo - 1) * limit;
    const user = await getAllUser(offset, req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const get = async (req, res) => {
  try {
    const user = await getUser(req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};
const update = (req, res) => {
  return res.send({
    status: 200,
    message: "Updated User",
    data: req.body,
    error: {},
  });
};
const remove = (req, res) => {
  return res.send({
    status: 200,
    message: "Deleted User",
    data: req.query,
    error: {},
  });
};
module.exports = { create, getAll, update, remove, get };
