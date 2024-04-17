const express = require('express');

const controllers = require ('./controllers');

const router = express.Router();

router.get('/getSegment', controllers.getSegmentStatus);

module.exports = router;