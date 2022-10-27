const API_KEY = "5c1afb25184c64bf9923ee623332f6ef";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      const tempIcon = document.querySelector("#weather .temp-icon");
      const icon = data.weather[0].icon;
      const img = document.createElement("img");
      tempIcon.append(img);
      city.innerText = `지역: ${data.name}`;
      weather.innerText = `${Math.floor(data.main.temp)}°C`;
      img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    });
}
function onGeoError() {
  alert("위치 정보를 받을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
