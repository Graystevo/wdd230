// 543b25f5306a6bd35ae1625b04e51bca
// ST GEORGE:  [37.1042, -113.5841]

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-type");
const humdity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

const url ="https://api.openweathermap.org/data/2.5/weather?lat=37.10&lon=-113.58&appid=543b25f5306a6bd35ae1625b04e51bca&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  let capitalizedDesc = capitalizeWords(desc);
  weatherIcon.setAttribute("src", iconsrc);
  captionDesc.textContent = `${capitalizedDesc}`;
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=37.10&lon=-113.58&units=imperial&appid=543b25f5306a6bd35ae1625b04e51bca";

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const forecastData = await response.json();
      console.log(forecastData); // testing only
      displayForecast(forecastData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Forecast error:", error);
  }
}

function displayForecast(data) {
  // Filter the forecast entries to get those for 12:00:00 each day (midday)
  const middayForecasts = data.list.filter((entry) => entry.dt_txt.includes("15:00:00")).slice(0, 3);

  // Select the forecast container element from the DOM
  const forecastContainer = document.querySelector("#forecast");
  let forecastHTML = `<h4>3-Day Forecast</h4>`;

  middayForecasts.forEach((day) => {
    forecastHTML += `
        <div class="forecast-day">
          <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
          <p>${Math.round(day.main.temp)}&deg;F</p>
          <p>${capitalizeWords(day.weather[0].description)}</p>
          <img src="https://openweathermap.org/img/w/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
        </div>
      `;
  });

  forecastContainer.innerHTML = forecastHTML;
}

function showMeetBanner() {
  const banner = document.getElementById("meet-banner");
  const today = new Date().getDay();
  // Show banner on Monday (1), Tuesday (2), or Wednesday (3)
  if (today >= 1 && today <= 3) {
    banner.style.display = "flex";
  } else {
    banner.style.display = "none";
  }
}

// Enable the user to close the banner
document.getElementById("close-banner").addEventListener("click", function () {
  document.getElementById("meet-banner").style.display = "none";
});

apiFetch();
fetchForecast();
showMeetBanner();