var express = require("express");
var router = express.Router();
const {
  create,
  getAll,
  get,
  update,
  remove,
} = require("../controllers/carController");
const {
  createCar,
  updateCar,
  removeCar,
  getCar,
  getCars,
} = require("../validations/carValidator");

/* GET car listing. */
router.post("/create", createCar, create);

router.get("/get-all", getCars, getAll);

router.get("/get", getCar, get);

router.put("/update", updateCar, update);

router.delete("/delete", removeCar, remove);

module.exports = router;
