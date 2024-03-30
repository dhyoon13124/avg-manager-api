const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

router.get('/', controllers.getAllRecentOrders);

router.get('/list', controllers.getRecentOrders);

router.get('/counts', controllers.getCounts);

module.exports = router;
