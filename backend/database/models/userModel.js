const { models } = require("../index");

module.exports = {
  createUser: async (body) => {
    try {
      const data = await models.users.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error };
    }
  },
  getAllUser: async () => {
    try {
      const data = await models.users.findAndCountAll({
        attributes: {
          exclude: ["password", "deletedAt"],
        },
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error };
    }
  },
  getUser: async (username) => {
    try {
      const data = await models.users.findOne({
        where: {
          username: username,
          //...(username == "false" ? { userID } : { username }),
        },
        attributes: {
          exclude: ["password", "deletedAt"],
        },
      });
      return {
        data: data,
      };
    } catch (error) {
      console.log("check");
      console.log("check");
      console.log("check", error);
      return { error: error };
    }
  },
};
