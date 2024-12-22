require("dotenv").config();
const responseHandler = require("../responseHandler");
const { getUser } = require("../database/models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { response } = require("../app");

const login = async (req, res) => {
  try {
    const { password, username } = req.body;
    const isExist = await getUser({ username, userID: false });
    if (isExist.error || !isExist.data) {
      res.cookie("auth", undefined, { maxAge: 300000, httpOnly: true });
      return responseHandler(res, {
        error: isExist.error || "Invalid Credantials",
      });
    }
    const isValid = await compare(password, isExist.data.dataValues.password);
    if (!isValid) {
      res.cookie("auth", undefined, { maxAge: 300000, httpOnly: true });
      return responseHandler(res, { error: "Invalid Credantials" });
    }
    delete isExist.data.dataValues.password;
    const token = await sign(isExist.data.dataValues, process.env.SECRET, {
      expiresIn: 300000,
    });
    res.cookie("auth", token, { maxAge: 300000, httpOnly: true });

    return responseHandler(res, { data: token });
  } catch (error) {
    console.log("controller check", error);
    return responseHandler(res, { error: error });
  }
};

module.exports = { login };
