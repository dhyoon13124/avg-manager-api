const { Vehicle } = require('../../database/models');
const { Op } = require('sequelize');
const controllers = {};

controllers.getDeletedVehicleCount = async (req, res) => {
  const { startDate, endDate } = req.query;

  const orders = await Vehicle.count({
    where: {
      ...(startDate && endDate
        ? {
          receive_time: {
            [Op.between]: [startDate, endDate],
          },
        }
        : {}),
      is_deleted: true,
    },
  });

  res.send({
    data: orders,
  });
};

module.exports = controllers;
