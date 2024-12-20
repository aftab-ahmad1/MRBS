const sequelize = require("./dbconnection");

const { users } = require("./tables/users");
const models = { users }; // wrap up all the tables in one

// db.sequelize = sequelize;
sequelize.models = models;
module.exports = { sequelize, models };
