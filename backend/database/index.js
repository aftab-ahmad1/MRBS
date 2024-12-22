const sequelize = require("./dbconnection");

const { users } = require("./tables/users");
const { cars } = require("./tables/cars");
const { bookings } = require("./tables/bookings");
const { sessions } = require("./tables/sessions");
const models = { users, cars, bookings, sessions }; // wrap up all the tables in one

//db relations
users.hasOne(sessions, { foreignKey: "userID", as: "session" });
sessions.belongsTo(users, { foreignKey: "userID", as: "user" });

users.hasMany(bookings, { foreignKey: "userID", as: "booking" });
bookings.belongsTo(users, { foreignKey: "userID", as: "usersBookings" });

cars.hasOne(bookings, { foreignKey: "carID", as: "booking" });
bookings.belongsTo(cars, { foreignKey: "carID", as: "carBooking" });

// db.sequelize = sequelize;
sequelize.models = models;
module.exports = { sequelize, models };
