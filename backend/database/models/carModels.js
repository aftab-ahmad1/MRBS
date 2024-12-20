const { models } = require("../index");

module.exports = {
  createCar: async (body) => {
    try {
      const data = await models.users.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      console.log("check", error);
      return { error: error.error[0].message };
    }
  },
  getAllCars: async (offset, query) => {
    try {
      const data = await models.users.findAndCountAll({
        where: {
          ...(query.name ? { name: query.name } : true),
          ...(query.carNo ? { carNo: query.carNo } : true),
          ...(query.brnad ? { brand: query.brand } : true),
        },
        attributes: {
          exclude: ["deletedAt"],
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
  getCar: async ({ carID, carNo }) => {
    try {
      const data = await models.users.findOne({
        where: {
          ...(carNo == "false" ? { carID: carID } : { carNo: carNo }),
        },
        attributes: {
          exclude: ["deletedAt"],
        },
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  updateCar: async ({ carID, ...body }) => {
    try {
      const data = await models.users.update(
        { ...body },
        {
          where: {
            carID: carID,
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
  deleteCar: async ({ carNo }) => {
    try {
      const data = await models.users.destroy({
        where: {
          carNo: carNo,
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
