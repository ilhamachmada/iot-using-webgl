const express = require('express');
const vFarm = require('../controller/virtualFarmController');

const router = express.Router();

router.get('/virtual-farm', vFarm.farm);

module.exports = router;