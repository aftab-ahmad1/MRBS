const responseHandler = require("../responseHandler");

module.exports = {
  create: (req, res) => {
    try {
      return responseHandler(res, { data: "1" });
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
  getAll: (req, res) => {
    try {
      return res.send({
        status: 200,
        message: "Get Admin",
        data: { value: 1 },
        error: {},
      });
    } catch (error) {
      return res.send({
        status: 400,
        message: "Unable to Get Admin",
        data: {},
        error: error.message,
      });
    }
  },
  update: (req, res) => {
    try {
      return res.send({
        status: 200,
        message: "Updated Admin",
        data: { value: 1 },
        error: {},
      });
    } catch (error) {
      return res.send({
        status: 400,
        message: "Unable to update Admin",
        data: {},
        error: error.message,
      });
    }
  },
  remove: (req, res) => {
    try {
      return res.send({
        status: 200,
        message: "Deleted Admin",
        data: { value: 1 },
        error: {},
      });
    } catch (error) {
      return res.send({
        status: 400,
        message: "Unable to delete Admin",
        data: {},
        error: error.message,
      });
    }
  },
};
