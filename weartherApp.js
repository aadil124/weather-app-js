const inputValue = document.querySelector("#searchTxt");
console.log(inputValue);
const btn = document.querySelector("#btn_weather");
const apiKey = `88770fab231ef74f4f8ab39995aa3633`;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apiKey}`;

const getData = async () => {
  console.log(weatherUrl);
  try {
    let response = await fetch(weatherUrl);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", getData);
