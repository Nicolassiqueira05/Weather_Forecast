Weather Forecast App
This is a simple web application that displays the daily weather forecast based on geographic coordinates. You can either manually enter latitude and longitude or allow the browser to get your current location.

Features
Get current location using the browser's Geolocation API

Convert coordinates into city, state, and country using BigDataCloud Reverse Geocoding API

Fetch daily weather forecast using the Open-Meteo Weather Forecast API

Display:

Precipitation (mm)

Average daily humidity (%)

Wind speed (km/h)

Maximum and minimum temperatures (°C)

Technologies and APIs Used
Technology / API	Purpose
HTML, CSS, JavaScript	UI and application logic
Geolocation API (Native)	Obtain user's coordinates
BigDataCloud Reverse Geocoding API	Convert latitude/longitude into location name
Open-Meteo API	Fetch weather forecast data (temperature, rain, wind, humidity)

How to Use
Open the app in your browser (just open the index.html file)

You will see two input fields:

Latitude

Longitude

You can:

Fill in the coordinates manually

Or click the Current Location button to get your location automatically

Click the Get Weather button to retrieve the weather forecast based on the provided coordinates

File Structure
bash
Copiar
Editar
project/
├── index.html          # Main HTML file
├── style.css           # Interface styling
├── locationapi.js      # Handles geolocation and external API calls
├── htmlhandler.js      # UI interaction logic and result rendering
Notes
The Geolocation API may prompt the user for permission. It only works over HTTPS or on localhost.

The APIs used are key-free but may have request limits.

Author
Developed by Nicolas Siqueira
This project is for educational purposes. Feel free to use, modify, or improve it.

Let me know if you'd like a version with screenshots, a badge section (like GitHub Actions, demo link, etc.), or deployment instructions.
