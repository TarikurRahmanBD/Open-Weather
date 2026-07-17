<?php
        // PHP code to call the OpenWeatherMap API and get the weather data

        // Your API key from OpenWeatherMap
        $apiKey = 'f8d045eeee0c1a93929192c79d3f88b4';

        // The city to search for
        $city = $_GET['city'];

        // API URL with the city and API key
        $apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=$city&appid=$apiKey";

        // Use file_get_contents() function to get the data from the API
        $data = file_get_contents($apiUrl);

        // Decode the data from JSON format to a PHP array
        $weatherData = json_decode($data, true);

        echo $weatherData;
        // Get the current weather data for today
        $today = $weatherData['list'][0];

        // Get the forecast data for the next five days
        $forecast = array_slice($weatherData['list'], 1, 5);

?>