# ☀️ Open Weather - Weather Forecast Web Application

A modern, responsive web application that provides real-time weather information and 5-day forecasts for any city worldwide. Built with Node.js and integrated with the OpenWeatherMap API for accurate, up-to-date weather data.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [About the Developer](#about-the-developer)
- [License](#license)

---

## 🌍 Project Overview

**Open Weather** is a user-friendly web application that allows you to search for weather information for any city in the world. The application displays:

- **Current weather conditions** including temperature, "feels like" temperature, humidity, and weather description
- **5-day weather forecast** with detailed information for each day
- **Beautiful, responsive UI** that works seamlessly on desktop and mobile devices
- **Real-time data** fetched from the OpenWeatherMap API

Whether you're planning a trip, checking tomorrow's forecast, or just curious about the weather anywhere in the world, this application provides all the information you need in a clean, intuitive interface.

---

## ✨ Features

- 🔍 **City Search**: Search for weather information by entering any city name
- 🌡️ **Current Weather Display**: Real-time temperature, weather conditions, and atmospheric data
- 📅 **5-Day Forecast**: Extended forecast with temperature trends and weather predictions
- 📱 **Responsive Design**: Beautiful interface that adapts to all screen sizes (desktop, tablet, mobile)
- 🎨 **Modern UI**: Clean, card-based layout with smooth transitions and hover effects
- ⚡ **Fast Performance**: Lightweight Node.js server with quick API response times
- 🌐 **Global Data**: Access weather information for cities worldwide
- 📊 **Detailed Metrics**: Humidity, "feels like" temperature, min/max temperatures, and more

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning the repository)

### Step 1: Clone or Download the Project

```bash
# Clone the repository
git clone https://github.com/tarikurrahmanbd/webapp-open-weather-main.git

# Or manually download and extract the project folder
cd webapp-open-weather-main
```

### Step 2: Verify Project Files

Make sure your project folder contains these files:

```
webapp-open-weather-main/
├── server.js          # Node.js server file
├── index.php          # HTML structure (served by Node.js)
├── style.css          # CSS styling
├── woods.jpg          # Background image
├── README.md          # This file
└── package.json       # Project dependencies (optional)
```

### Step 3: Start the Application

Open your terminal/command prompt and run:

```bash
cd path/to/webapp-open-weather-main
node server.js
```

**Expected output:**
```
Server running at http://localhost:8000/
```

---

## 🎯 How to Run

### Running the Weather App

1. **Navigate to the project directory:**
   ```bash
   cd webapp-open-weather-main
   ```

2. **Start the Node.js server:**
   ```bash
   node server.js
   ```

3. **Open your web browser and visit:**
   ```
   http://localhost:8000/
   ```

4. **Search for a city:**
   - Enter a city name in the search box (e.g., "London", "New York", "Tokyo")
   - Click the "Search" button
   - View the current weather and 5-day forecast

### Stopping the Server

To stop the server, press `Ctrl + C` in your terminal.

---

## 🗂️ Project Structure

```
webapp-open-weather-main/
│
├── server.js          # Main Node.js server that handles routing and API calls
├── index.php          # HTML template for the weather interface
├── style.css          # CSS styling for the responsive design
├── woods.jpg          # Background image for the application
├── README.md          # Documentation (this file)
└── weather.php        # Additional weather processing file (optional)
```

### Key Files Explained

- **server.js**: The main application file that:
  - Runs a local web server on port 8000
  - Handles form submissions and city searches
  - Makes API calls to OpenWeatherMap
  - Renders the HTML with weather data

- **index.php**: Contains the HTML structure and form for user input

- **style.css**: Provides responsive styling with:
  - Modern card-based layout
  - Mobile-friendly design
  - Smooth animations and transitions
  - Weather icon integration

---

## 💻 Technologies Used

- **Node.js** - JavaScript runtime for server-side execution
- **Express-like HTTP Server** - Built-in Node.js HTTP module
- **OpenWeatherMap API** - Real-time weather data provider
- **HTML5** - Semantic markup for the user interface
- **CSS3** - Modern styling with flexbox and media queries
- **JavaScript** - Client-side interactivity

---

## 👨‍💻 About the Developer

**Tarikur Rahman** is a passionate full-stack web developer with expertise in creating modern, responsive web applications.

### Connect with Me

- **GitHub:** [github.com/tarikurrahmanbd](https://github.com/tarikurrahmanbd)
- **Portfolio:** [yourtarikur.netlify.app](https://yourtarikur.netlify.app/)
- **Social Handle:** @tarikurrahman08
- **Email:** [tarikurrahman2008@gmail.com](mailto:tarikurrahman2008@gmail.com)

### About

I'm dedicated to building user-friendly applications that solve real-world problems. This weather application showcases my skills in API integration, responsive design, and server-side development. Feel free to reach out if you have any questions or collaboration opportunities!

---

## 📄 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as long as you include the original license and attribution.

### MIT License Text

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🤝 Contributing

If you'd like to contribute to this project, feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

---

## 🐛 Troubleshooting

### Server Won't Start
- Make sure Node.js is installed: `node --version`
- Ensure port 8000 is not in use
- Check that you're in the correct project directory

### Weather Data Not Loading
- Verify your internet connection
- Ensure the OpenWeatherMap API is accessible
- Check that the city name is spelled correctly

### Styling Not Displaying
- Clear your browser cache
- Make sure `style.css` and `woods.jpg` are in the same directory as `server.js`
- Try opening the app in an incognito/private window

---

## 📞 Support

For questions, issues, or feature requests, please reach out:
- **Email:** tarikurrahman2008@gmail.com
- **GitHub Issues:** [Report an Issue](https://github.com/tarikurrahmanbd/webapp-open-weather-main/issues)

---

## 🎉 Thank You

Thank you for using **Open Weather**! We hope you find it useful. Don't forget to star this repository if you like it! ⭐

---

**Happy Weather Forecasting!** 🌤️
