<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Openweather</title>
</head>
    <body>
        <!-- HTML for the search bar and card elements -->
        <form action="weather.php" method="get">
        <label for="city">Enter a city:</label>
        <input type="text" id="city" name="city">
        <button type="submit">Search</button>
        </form>

        <div id="today" class="card">
        <!-- Today's weather forecast will be displayed here -->
        </div>

        <div id="forecast" class="card">
        <!-- Five day forecast will be displayed here -->
        </div>

    </body>
</html>