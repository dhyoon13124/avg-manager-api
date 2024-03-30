const express = require('express');

const router = express.Router();

const recentOrder = require('./recentOrder');

router.use('/recent-order', recentOrder);

module.exports = router;
