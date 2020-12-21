const express = require('express');
const testingCont = require('../controller/testing');

const router = express.Router();

router.get('/testing', testingCont.testing);

module.exports = router;