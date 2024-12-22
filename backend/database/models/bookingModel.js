const { models } = require("../index");

module.exports = {
  createBooking: async (body) => {
    console.log("Model check");
    try {
      const data = await models.bookings.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      console.log("Model check", error);
      return { error: error.error[0].message };
    }
  },
  getAllBookings: async (offset, query) => {
    try {
      const data = await models.bookings.findAndCountAll({
        where: {
          ...(query.bookingID ? { bookingID: query.bookingID } : true),
          ...(query.status ? { status: query.status } : true),
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
      console.log("check", error);
      return { error: error.error[0].message };
    }
  },
  getBooking: async ({ bookingID }) => {
    try {
      const data = await models.bookings.findOne({
        where: {
          bookingID: bookingID,
          //   ...(status == "false"
          //     ? { bookingID: bookingID }
          //     : { status: status }),
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
  updateBooking: async ({ bookingID, ...body }) => {
    try {
      const data = await models.bookings.update(
        { ...body },
        {
          where: {
            bookingID: bookingID,
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
  deleteBooking: async ({ bookingID }) => {
    try {
      const data = await models.bookings.destroy({
        where: {
          bookingID: bookingID,
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
