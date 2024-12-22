const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");
const { v4: uuid } = require("uuid");

class cars extends Model {}

cars.init(
  {
    carID: {
      type: DataTypes.STRING(80),
      primaryKey: true,
      //autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    carNo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    engine: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    gearBox: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    fuel: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    seats: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    airConditioner: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    paranoid: true,
    sequelize,
  }
);
cars.beforeCreate(async (car) => {
  car.carID = uuid();
});

module.exports = { cars };
