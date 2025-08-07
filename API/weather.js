
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const output = document.getElementById('showweather');
    const apiKey = "c98cecfe61fa7283cec5ee9cad935366";

    
    searchBtn.addEventListener('click', () => {
      fetchWeatherByCity(cityInput.value);
    });

    cityInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') fetchWeatherByCity(cityInput.value);
    });


    async function fetchWeatherByCity(cityName) {
      if (!cityName.trim()) {
        output.innerHTML = '<p class="text-danger">Please enter a city name.</p>';
        return;
      }

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod !== 200) {
          output.innerHTML = `<p class="text-warning mt-3">❌ ${data.message}</p>`;
          return;
          console.log(typeof(data.cod));
          
        }

        const city = data.name;
        const country = data.sys.country;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const condition = data.weather[0].main;
        const icon = data.weather[0].icon;

        const card = `
          <div class="card-result text-start text-light">
            <h3>${city}, ${country} 🌍</h3>
            <hr class="border-white">
            <p class="weather-emoji mb-1">
              <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${condition}" style="width:50px;vertical-align:middle;">
              ${condition}
            </p>
            <p>🌡️ Temperature: <strong>${temp}°C</strong></p>
            <p>🤒 Feels Like: <strong>${feelsLike}°C</strong></p>
            <p>💧 Humidity: <strong>${humidity}%</strong></p>
            <p>🌬️ Wind Speed: <strong>${wind} m/s</strong></p>
          </div>
        `;
        output.innerHTML = card;

      } catch (err) {
        console.error('Error:', err);
        output.innerHTML = `<p class="text-danger mt-3">⚠️ Could not fetch weather. Please try again.</p>`;
      }
    }


  