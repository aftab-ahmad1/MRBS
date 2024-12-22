var express = require("express");
var router = express.Router();
const {
  create,
  getAll,
  get,
  update,
  remove,
} = require("../controllers/bookingController");
const {
  createBooking,
  updateBooking,
  removeBooking,
  getBooking,
  getBookings,
} = require("../validations/bookingValidator");

/* GET car listing. */
router.post("/create", createBooking, create);

router.get("/get-all", getBookings, getAll);

router.get("/get", getBooking, get);

router.put("/update", updateBooking, update);

router.delete("/delete", removeBooking, remove);

module.exports = router;
