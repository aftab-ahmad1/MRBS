var express = require("express");
var router = express.Router();
const { login } = require("../controllers/authController");
const { Login } = require("../validations/authValidator");

/* GET car listing. */
router.post("/login", Login, login);

module.exports = router;
