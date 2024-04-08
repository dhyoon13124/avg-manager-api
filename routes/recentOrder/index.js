const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

router.get('/', controllers.getAllRecentOrders);

router.get('/list', controllers.getRecentOrders);

router.get('/counts', controllers.getCounts);

router.get('/inputAGV', controllers.getDeletedVehicleCount);    //20240408추가


// router.get('/counts', controllers.getDeletedVehicleCount);



module.exports = router;
