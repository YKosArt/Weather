
  const apiKey = '7cba2aa4f25b06ce176f3bd32c6caaad';
    const city = 'Kyiv';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("HTTP error " + response.status);
        return response.json();
      })
      .then(data => {
        const weatherDiv = document.getElementById("weather");
        // Виводимо дані про погоду
        weatherDiv.innerHTML = `
        <p><strong>місто:</strong> ${data.name}</p>
          <p><strong>Температура:</strong> ${data.main.temp}°C</p>
          <p><strong>Погода:</strong> ${data.weather[0].description}</p>
          <p><strong>Вологість:</strong> ${data.main.humidity}%</p>
        `;
      })
      .catch(error => {
        document.getElementById("weather").textContent = "Помилка при отриманні погоди: " + error;
        console.error("Помилка:", error);
      });