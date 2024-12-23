const { models } = require("../index");

module.exports = {
  createUser: async (body) => {
    try {
      const data = await models.users.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      console.log("model check", error);
      return { error: error.error[0].message };
    }
  },
  getAllUser: async (offset, query) => {
    try {
      const data = await models.users.findAndCountAll({
        where: {
          ...(query.name ? { name: query.name } : true),
          ...(query.username ? { username: query.username } : true),
          ...(query.email ? { email: query.email } : true),
        },
        attributes: {
          exclude: ["password", "deletedAt"],
        },
        offset: offset,
        limit: query.limit,
        order: [
          [
            query.orderBy ? query.orderBy : "createdAt",
            query.order ? query.order : "DESC",
          ],
        ],
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  getUser: async ({ userID, username }) => {
    try {
      const data = await models.users.findOne({
        where: {
          ...(username == "false"
            ? { userID: userID }
            : { username: username }),
        },
        paranoid: false,
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  updateUser: async ({ userID, ...body }) => {
    try {
      const data = await models.users.update(
        { ...body },
        {
          where: {
            userID: userID,
          },
        }
      );
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  deleteUser: async ({ username }) => {
    try {
      const data = await models.users.destroy({
        where: {
          username: username,
        },
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
};
