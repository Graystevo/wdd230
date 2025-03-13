// 543b25f5306a6bd35ae1625b04e51bca
// ST GEORGE:  [37.1042, -113.5841]

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=37.10&lon=-113.58&appid=543b25f5306a6bd35ae1625b04e51bca&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  let capitalizedDesc = capitalizeWords(desc);
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("src", iconsrc);
  captionDesc.textContent = `${" - " + capitalizedDesc}`;
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

apiFetch();
