const express = require('express');
const analyticsRoutes = require('./analytics.routes');
const {errorMiddleware} = require('./error.middleware');

const app = express();
app.use(express.json());

app.use('/api/analytics', analyticsRoutes);
app.use(errorMiddleware);

module.exports = app;