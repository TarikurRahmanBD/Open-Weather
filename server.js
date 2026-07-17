const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const https = require('https');

const PORT = 8000;
const API_KEY = "f8d045eeee0c1a93929192c79d3f88b4";

function getDateStr(dtTxt) {
  const date = new Date(dtTxt);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const day = days[date.getDay()];
  const dateNum = String(date.getDate()).padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${dateNum}, ${month} ${year}`;
}

function buildWeatherCard(day) {
  const temp = Math.round(day.main.temp);
  const feelsLike = Math.round(day.main.feels_like);
  const tempMin = Math.round(day.main.temp_min);
  const tempMax = Math.round(day.main.temp_max);
  const humidity = day.main.humidity;
  const description = day.weather[0].description;
  const icon = day.weather[0].icon;
  const date = getDateStr(day.dt_txt);

  return `
    <div class="card">
      <div>
        <div class="temperature">${temp}°C</div>
        <div class="inline">
          <div class="weather-description">${description}</div>
          <img class="weather-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">
        </div>
        <p>${date}</p>
      </div>
      <div class="vertical-line"></div>
      <div>
        <p>Feels Like: ${feelsLike}°C</p>
        <p>Temperature (min): ${tempMin}°C</p>
        <p>Temperature (max): ${tempMax}°C</p>
        <p>Humidity: ${humidity}</p>
      </div>
    </div>
  `;
}

function buildHTML(today, forecast, cityName) {
  let forecastHTML = '';
  if (forecast && forecast.length > 0) {
    forecastHTML = '<h1>Daily</h1>';
    forecast.forEach(day => {
      forecastHTML += buildWeatherCard(day);
    });
  }

  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<img class="background" src="woods.jpg" alt="">
    <div class="center-box">
        <h1>Open Weather</h1>
        <form action="" method="POST">
        <input class="search-bar" type="text" name="city" placeholder="Enter city">
        <input class="search-button" type="submit" value="Search">
        </form>
        ${today ? `
          <h1>Today at ${cityName},</h1>
          ${buildWeatherCard(today)}
          ${forecastHTML}
        ` : ''}
    </div>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const html = buildHTML(null, null, '');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else if (req.url === '/' && req.method === 'POST') {
    // Handle form submission
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const params = querystring.parse(body);
      const city = params.city;
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      https.get(apiUrl, (apiRes) => {
        let weatherData = '';
        apiRes.on('data', chunk => {
          weatherData += chunk;
        });
        apiRes.on('end', () => {
          try {
            const data = JSON.parse(weatherData);
            const today = data.list[0];
            const forecast = data.list.slice(1, 6);
            const cityName = data.city.name;

            const html = buildHTML(today, forecast, cityName);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(html);
          } catch (e) {
            console.error('Error:', e);
            const html = buildHTML(null, null, '') + '<p style="color: red; text-align: center;">City not found or API error</p>';
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(html);
          }
        });
      }).on('error', (err) => {
        console.error('API Error:', err);
        const html = buildHTML(null, null, '') + '<p style="color: red; text-align: center;">Error fetching weather data</p>';
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
      });
    });
  } else {
    // Serve static files
    const filePath = path.join(__dirname, req.url);
    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404);
        res.end('Not Found');
        return;
      }
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Error reading file');
          return;
        }
        const ext = path.extname(filePath);
        let contentType = 'text/plain';
        if (ext === '.css') contentType = 'text/css';
        if (ext === '.jpg') contentType = 'image/jpeg';
        if (ext === '.png') contentType = 'image/png';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
