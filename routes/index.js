const express = require('express');

const router = express.Router();

const recentOrder = require('./recentOrder');
const  vehicle = require('./vehicle');
const point = require('./point');

router.use('/recent-order', recentOrder);
router.use('/vehicle', vehicle);
router.use('/point', point);

module.exports = router;
