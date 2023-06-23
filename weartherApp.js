const btn = document.querySelector("#btn_weather");
const getData = async () => {
  const inputValue = document.querySelector("#searchTxt").value;
  let data;
  if (inputValue === "") {
    alert("Please Enter City Name");
  } else {
    const apiKey = `88770fab231ef74f4f8ab39995aa3633`;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`;
    console.log(weatherUrl);
    try {
      let response = await fetch(weatherUrl);
      data = await response.json();
      const cityName = data.name;
      const minTemp = data.main.temp_min;
      const maxTemp = data.main.temp_max;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const lat = data.coord.lat;
      const lon = data.coord.lon;
      const showResult = document.querySelector(".result");
      showResult.innerHTML = `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header text-center"><h1>${cityName}</h1></div>
    <div class="card-body">
    <h5 class="card-title"></h5>
    <h5 class="card-title">Latitude: ${lat}</h5>
    <h5 class="card-title">Longitude: ${lon}</h5>
    <h5 class="card-title">Min. Temperature: ${Math.round(
      minTemp - 273.1
    )}  °C</h5>
    <h5 class="card-title">Max. Temperature: ${Math.round(
      maxTemp - 273.1
    )}  °C</h5>
    <h5 class="card-title">Humidity: ${humidity} %</h5>
    <h5 class="card-title">Wind Speed: ${windSpeed} m/s</h5>
    </div>
    </div>
  `;
    } catch (error) {
      console.log(error);
    }
  }
};

btn.addEventListener("click", getData);
