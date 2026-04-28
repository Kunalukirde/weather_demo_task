const AnalyticsService = require('./analytics.service');

const analyticsService = new AnalyticsService();

const getCitiesAnalytics = async (req, res, next) => {
    try {
        const { cities } = req.body;
        const result = await analyticsService.getCitiesAnalytics(cities);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const getCityAnalytics = async (req, res, next) => {
    try {
        const { name } = req.params;
        const result = await analyticsService.getCityAnalytics(name);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = { getCitiesAnalytics, getCityAnalytics };