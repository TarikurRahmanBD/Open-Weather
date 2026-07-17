/*
====================================================
Project: Open Weather
Developer: Tarikur Rahman
GitHub: https://github.com/tarikurrahmanbd
====================================================
*/

<?php

$apiKey = "f8d045eeee0c1a93929192c79d3f88b4";

if (isset($_POST["city"])) {
  $city = str_replace(" ", "+", $_POST["city"]);
  $apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=$city&appid=$apiKey&units=metric";
  $data = file_get_contents($apiUrl);

  $weatherData = json_decode($data, true);
  $today = $weatherData['list'][0];
  $forecast = array_slice($weatherData['list'], 1, 5);
}

?>

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
        <?php
        if (isset($today)) { ?>
            <h1>Today at <?php echo $weatherData['city']['name']; ?>,</h1>
            <div class="card">
                <!-- echo '<img src="https://openweathermap.org/img/wn/'.$icon.'@2x.png" alt="">'; -->
                <div>
                    <div class="temperature"><?php echo intval($today['main']['temp']); ?>°C</div>
                    <div class="inline">
                        <div class="weather-description"><?php echo $today['weather'][0]['description']; ?></div>
                        <img class="weather-icon" src="https://openweathermap.org/img/wn/<?php echo $today['weather'][0]['icon']; ?>.png" alt="">
                    </div>
                    <?php
                        $date = date("l d, M y", strtotime($today['dt_txt']));
                    ?>
                    <p><?php echo $date; ?></p>
                </div>
                <div class="vertical-line"></div>
                <div>
                    <p>Feels Like: <?php echo intval($today['main']['feels_like']); ?>°C</p>
                    <p>Temperature (min): <?php echo intval($today['main']['temp_min']); ?>°C</p>
                    <p>Temperature (max): <?php echo intval($today['main']['temp_max']); ?>°C</p>
                    <p>Humidity: <?php echo intval($today['main']['humidity']); ?></p>
                </div>
            </div>
        <?php
        }
        ?>
        
        <?php if (isset($today)) { ?>
        <h1>Daily</h1>
            <?php foreach ($forecast as $day): ?>

                <div class="card">
                <div>
                    <div class="temperature"><?php echo intval($day['main']['temp']); ?>°C</div>
                    <div class="inline">
                        <div class="weather-description"><?php echo $day['weather'][0]['description']; ?></div>
                        <img class="weather-icon" src="https://openweathermap.org/img/wn/<?php echo $day['weather'][0]['icon']; ?>.png" alt="">
                    </div>
                    <?php
                        $date = date("l d, M y", strtotime($day['dt_txt']));
                    ?>
                    <p><?php echo $date; ?></p>
                </div>
                <div class="vertical-line"></div>
                <div>
                    <p>Feels Like: <?php echo intval($day['main']['feels_like']); ?>°C</p>
                    <p>Temperature (min): <?php echo intval($day['main']['temp_min']); ?>°C</p>
                    <p>Temperature (max): <?php echo intval($day['main']['temp_max']); ?>°C</p>
                    <p>Humidity: <?php echo intval($day['main']['humidity']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        <?php } ?>
    </div>
</body>
</html>