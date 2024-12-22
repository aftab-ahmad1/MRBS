const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");
const { v4: uuid } = require("uuid");
const users = require("./users");

class sessions extends Model {}

sessions.init(
  {
    sessionID: {
      type: DataTypes.STRING(80),
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userID: {
      type: DataTypes.STRING(80),
      unique: true,
      allowNull: false,
      references: {
        model: users,
        key: "userID",
      },
    },
  },
  {
    paranoid: true,
    sequelize,
  }
);
sessions.beforeCreate(async (session) => {
  session.sessionID = uuid();
});

module.exports = { sessions };
