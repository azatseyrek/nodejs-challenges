const request = require("request");
require("dotenv").config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=Mersin`;

request(url, (error, response) => {
  const data = JSON.parse(response.body);
//   console.log(data.current);
    console.log(`"it is currently ${data.current.temperature} degrees"`);
});


