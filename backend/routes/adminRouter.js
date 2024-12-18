var express = require("express");
var router = express.Router();
const {
  create,
  getAll,
  update,
  remove,
} = require("../controllers/adminController");
const {
  createAdmin,
  updateAdmin,
  removeAdmin,
} = require("../validations/adminValidator");

/* GET users listing. */
router.post("/create", createAdmin, create);

router.get("/get-all", getAll);

router.put("/update", updateAdmin, update);

router.delete("/delete", removeAdmin, remove);

module.exports = router;
