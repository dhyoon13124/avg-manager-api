const express = require('express');

const router = express.Router();

const recentOrder = require('./recentOrder');
const vehicle = require('./vehicle');
const point = require('./point');
const segment = require('./Segment');

router.use('/recent-order', recentOrder);
router.use('/vehicle', vehicle);
router.use('/point', point);
router.use('/segment',segment);

module.exports = router;
