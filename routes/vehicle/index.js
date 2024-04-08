const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

router.get('/deleted-vehicle-count', controllers.getDeletedVehicleCount);

router.get('.getvehicle', controllers.getAllVehicles);

module.exports = router;
