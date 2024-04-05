const express = require('express');

const router = express.Router();

const recentOrder = require('./recentOrder');
const  vehicle = require('./vehicle');

router.use('/recent-order', recentOrder);
router.use('/vehicle', vehicle);

module.exports = router;
