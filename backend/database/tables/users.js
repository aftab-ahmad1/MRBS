const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");

class users extends Model {}

users.init(
  {
    userID: {
      type: DataTypes.STRING(80),
      primaryKey: true,
      //autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  {
    paranoid: true,
    sequelize,
  }
);
users.beforeCreate(async (user) => {
  user.userID = uuid();
  user.password = await hash(user.password, 10);
});
users.afterCreate((user) => {
  delete user.dataValues.password;
});

module.exports = { users };
