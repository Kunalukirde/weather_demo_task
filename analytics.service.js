const WeatherService = require('./weather.service'); // Import WeatherService

class AnalyticsService { // Define AnalyticsService
  constructor() { // Constructor
    this.weatherService = new WeatherService(); // Create service instance
  } // End constructor

  async getCityAnalytics(city) { // Get analytics for one city
    const current = await this.weatherService.getCurrentWeather(city); // Correct method call
    const forecast = await this.weatherService.getForecast(city); // Get forecast

    const forecastTemps = forecast.list.map((item) => item.main.temp); // Extract forecast temperatures
    const minForecastTemperature = Math.min(...forecastTemps); // Minimum temp
    const maxForecastTemperature = Math.max(...forecastTemps); // Maximum temp

    return { // Return result
      city, // City name
      currentTemperature: current.main.temp, // Current temperature
      minForecastTemperature, // Minimum forecast temperature
      maxForecastTemperature, // Maximum forecast temperature
      warning: current.main.temp > 35 ? 'Temperature is above 35°C' : null // Warning if hot
    }; // End return
  } // End method
} // End class

module.exports = AnalyticsService; // Export class