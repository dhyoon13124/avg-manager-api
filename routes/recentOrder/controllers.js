const { OrderSchedule } = require('../../database/models');
const {Vehicle} = require('../../database/models');
const { Op } = require('sequelize');
const controllers = {};

const DATE_TIME_TYPE = {
  ACTIVE_TIME: 'active_time',
  COMPLETE_TIME: 'complete_time',
  RECEIVE_TIME: 'receive_time',
  
};
//투입된 차량 가져오는 쿼리문, Vehicle테이블에서 is_deleted가 1일때 20240408추가 
controllers.getDeletedVehicleCount = async (req, res) => {
  const vehicle = await Vehicle.count({
    where:{
      is_deleted:false,
    },
  });
  res.send({
    data:vehicle,
  });
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
