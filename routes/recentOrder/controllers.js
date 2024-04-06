const { OrderSchedule } = require('../../database/models');
const { Op } = require('sequelize');
const controllers = {};

const DATE_TIME_TYPE = {
  ACTIVE_TIME: 'active_time',
  COMPLETE_TIME: 'complete_time',
  RECEIVE_TIME: 'receive_time',
  
};

controllers.getAllRecentOrders = async (req, res) => {
  const orders = await OrderSchedule.findAll();
  res.send({
    data: orders,
  });
};

controllers.getRecentOrders = async (req, res) => {
  const { startDate, endDate } = req.query;

  const orders = await OrderSchedule.findAll({
    where: {
      ...(startDate && endDate
        ? {
            receive_time: {
              [Op.between]: [startDate, endDate],
            },
          }
        : {}),
    },
  });

  res.send({
    data: orders,
  });
};




controllers.getCounts = async (req, res) => {
  const { startDate, endDate, type } = req.query;
  
  const dateType = DATE_TIME_TYPE[type];
  const counts = await OrderSchedule.count({
    where: {
      ...(startDate && endDate  
        ? {
            [dateType]: {
              [Op.between]: [startDate, endDate],
            },
          }
        : {}),
    },
  });
  res.send({
    data: counts,
  });
};

module.exports = controllers;
