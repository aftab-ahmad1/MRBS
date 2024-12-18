var express = require("express");
var router = express.Router();
const {
  create,
  getAll,
  get,
  update,
  remove,
} = require("../controllers/userController");
const {
  createUser,
  updateUser,
  removeUser,
  getUser,
} = require("../validations/userValidator");

/* GET users listing. */
router.post("/create", createUser, create);

router.get("/get-all", getAll);

router.get("/get", getUser, get);

router.put("/update", updateUser, update);

router.delete("/delete", removeUser, remove);

module.exports = router;
