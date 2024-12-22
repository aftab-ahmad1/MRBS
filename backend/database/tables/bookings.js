const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");
const { v4: uuid } = require("uuid");
const users = require("./users");
const cars = require("./cars");

class bookings extends Model {}

bookings.init(
  {
    bookingID: {
      type: DataTypes.STRING(80),
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    userID: {
      type: DataTypes.STRING(80),
      allowNull: false,
      references: {
        model: users,
        key: "userID",
      },
    },
    carID: {
      type: DataTypes.STRING(80),
      unique: true,
      allowNull: false,
      references: {
        model: cars,
        key: "carID",
      },
    },
  },
  {
    paranoid: true,
    sequelize,
  }
);
bookings.beforeCreate(async (booking) => {
  booking.bookingID = uuid();
});

module.exports = { bookings };
