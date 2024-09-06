const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

searchBtn.addEventListener('click', () => {
  const location = searchInput.value.trim();
  if (location !== '') {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${API_URL}?key=${API_KEY}&q=${location}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

function displayWeather(data) {
  const location = data.location.name + ', ' + data.location.country;
  const temperature = data.current.temp_c + '°C';
  const description = data.current.condition.text;

  locationElement.textContent = location;
  temperatureElement.textContent = temperature;
  descriptionElement.textContent = description;
}
