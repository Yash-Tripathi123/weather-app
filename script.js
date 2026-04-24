async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "f9aa9ed84b515c4d8bc8d53bc7f123d4";
  
    if (!city) {
      alert("Please enter a city");
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      
      console.log("Status:", response.status); // debug
      
      const data = await response.json();
      console.log(data); // debug
  
      if (data.cod == 200) {
        document.getElementById("result").innerHTML = `
          <h2>${data.name}</h2>
          <p>🌡 Temp: ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌥 ${data.weather[0].main}</p>
        `;
      } else {
        document.getElementById("result").innerHTML = data.message;
      }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }