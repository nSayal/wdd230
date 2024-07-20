document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "3483b74ad6c59c5a34487f23d62912e9";
    const city = "Rexburg"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        document.getElementById("temperature").textContent = `${temperature}°C`;
        document.getElementById("description").textContent = description;
        document.getElementById("weather-icon").src = iconUrl;
        document.getElementById("weather-icon").alt = description;
    })
    .catch(error => console.error('Error fetching the weather data:', error));
});