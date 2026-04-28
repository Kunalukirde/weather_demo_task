const express = require('express');
const {getCitiesAnalytics, getCityAnalytics} = require('./analytics.controller');

const router = express.Router();
router.post('/cities', getCitiesAnalytics);
router.get('/cities/:city', getCityAnalytics);

module.exports = router;