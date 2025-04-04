document.getElementById('checkWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '447298a9102066d8fd848342d18d1d86'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const result = `Weather in ${data.name}: ${weatherDescription}, Temperature: ${temperature}°C`;
            document.getElementById('weatherResult').innerText = result;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerText = error.message;
        });
});