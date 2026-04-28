const axios = require('axios'); // Import axios for HTTP requests

class WeatherService { // Define WeatherService class
  async getCurrentWeather(city) { // Get current weather for a city
    try { // Start error handling
      const response = await axios.get( // Call weather API
        `${process.env.WEATHER_API_BASE_URL}/weather`, // Weather endpoint
        { // Axios config object
          params: { // Query parameters
            q: city, // City name
            appid: process.env.WEATHER_API_KEY, // API key
            units: 'metric' // Use Celsius
          } // End params
        } // End config
      ); // End request

      return response.data; // Return API response data
    } catch (error) { // Catch API or network errors
      throw new Error( // Throw a readable error
        error.response?.data?.message || error.message || 'Failed to fetch current weather'
      ); // End throw
    } // End catch
  } // End method

  async getForecast(city) { // Get forecast for a city
    try { // Start error handling
      const response = await axios.get( // Call forecast API
        `${process.env.WEATHER_API_BASE_URL}/forecast`, // Forecast endpoint
        { // Axios config object
          params: { // Query parameters
            q: city, // City name
            appid: process.env.WEATHER_API_KEY, // API key
            units: 'metric' // Use Celsius
          } // End params
        } // End config
      ); // End request

      return response.data; // Return API response data
    } catch (error) { // Catch API or network errors
      throw new Error( // Throw a readable error
        error.response?.data?.message || error.message || 'Failed to fetch forecast'
      ); // End throw
    } // End catch
  } // End method
} // End class

module.exports = WeatherService; // Export class