console.log('weather.js loaded'); // To check if the script is loaded

const apiKey = '8a9ae03b07299d71da9329e7556836f4';
const city = 'Rexburg';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Weather data:', data); // Log the data to check the response
        updateWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeather(data) {
    console.log('Updating weather data...'); // To check if this function is called

    const weatherElement = document.getElementById('weather');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const weatherIconElement = document.getElementById('weather-icon');

    if (data && data.main && data.weather) {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

        weatherElement.textContent = data.name;
        temperatureElement.textContent = `${temperature}°C`;
        descriptionElement.textContent = description;
        weatherIconElement.src = iconUrl;
    } else {
        console.error('Unexpected data structure:', data);
    }
}

fetchWeather();
