// Mock weather data for demonstration
const mockWeatherData = {
    'new york': {
        city: 'New York',
        temp: 22,
        feelsLike: 20,
        description: 'Sunny',
        icon: '☀️',
        windSpeed: 12,
        humidity: 65,
        visibility: 10,
        forecast: [
            { day: 'Mon', icon: '☀️', temp: 22 },
            { day: 'Tue', icon: '⛅', temp: 20 },
            { day: 'Wed', icon: '🌧️', temp: 18 },
            { day: 'Thu', icon: '⛈️', temp: 17 },
            { day: 'Fri', icon: '🌤️', temp: 21 }
        ]
    },
    'london': {
        city: 'London',
        temp: 15,
        feelsLike: 13,
        description: 'Cloudy',
        icon: '☁️',
        windSpeed: 18,
        humidity: 75,
        visibility: 8,
        forecast: [
            { day: 'Mon', icon: '☁️', temp: 15 },
            { day: 'Tue', icon: '🌧️', temp: 14 },
            { day: 'Wed', icon: '🌧️', temp: 13 },
            { day: 'Thu', icon: '⛅', temp: 16 },
            { day: 'Fri', icon: '☁️', temp: 15 }
        ]
    },
    'tokyo': {
        city: 'Tokyo',
        temp: 25,
        feelsLike: 27,
        description: 'Partly Cloudy',
        icon: '⛅',
        windSpeed: 10,
        humidity: 70,
        visibility: 12,
        forecast: [
            { day: 'Mon', icon: '⛅', temp: 25 },
            { day: 'Tue', icon: '☀️', temp: 26 },
            { day: 'Wed', icon: '☀️', temp: 27 },
            { day: 'Thu', icon: '⛅', temp: 24 },
            { day: 'Fri', icon: '🌤️', temp: 25 }
        ]
    },
    'paris': {
        city: 'Paris',
        temp: 18,
        feelsLike: 16,
        description: 'Clear',
        icon: '🌤️',
        windSpeed: 15,
        humidity: 60,
        visibility: 10,
        forecast: [
            { day: 'Mon', icon: '🌤️', temp: 18 },
            { day: 'Tue', icon: '☀️', temp: 20 },
            { day: 'Wed', icon: '⛅', temp: 19 },
            { day: 'Thu', icon: '🌧️', temp: 16 },
            { day: 'Fri', icon: '⛅', temp: 18 }
        ]
    },
    'sydney': {
        city: 'Sydney',
        temp: 28,
        feelsLike: 30,
        description: 'Sunny',
        icon: '☀️',
        windSpeed: 8,
        humidity: 55,
        visibility: 15,
        forecast: [
            { day: 'Mon', icon: '☀️', temp: 28 },
            { day: 'Tue', icon: '☀️', temp: 29 },
            { day: 'Wed', icon: '🌤️', temp: 27 },
            { day: 'Thu', icon: '⛅', temp: 26 },
            { day: 'Fri', icon: '☀️', temp: 28 }
        ]
    }
};

function searchWeather() {
    const cityInput = document.getElementById('cityInput').value.trim().toLowerCase();
    
    if (!cityInput) {
        alert('Please enter a city name!');
        return;
    }
    
    const weatherData = mockWeatherData[cityInput];
    
    if (weatherData) {
        displayWeather(weatherData);
    } else {
        alert('City not found! Try: New York, London, Tokyo, Paris, or Sydney');
    }
}

function displayWeather(data) {
    // Update current weather
    document.getElementById('cityName').textContent = data.city;
    document.getElementById('temp').textContent = data.temp;
    document.getElementById('weatherIcon').textContent = data.icon;
    document.getElementById('description').textContent = data.description;
    document.getElementById('windSpeed').textContent = data.windSpeed + ' km/h';
    document.getElementById('humidity').textContent = data.humidity + '%';
    document.getElementById('feelsLike').textContent = data.feelsLike + '°C';
    document.getElementById('visibility').textContent = data.visibility + ' km';
    
    // Update date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);
    
    // Update forecast
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';
    
    data.forecast.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <div class="forecast-day">${day.day}</div>
            <div class="forecast-icon">${day.icon}</div>
            <div class="forecast-temp">${day.temp}°C</div>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('cityInput');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchWeather();
        }
    });
    
    // Load default weather
    searchWeather();
});
