const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  let ampm = "";
  if (date.getHours < 12) {
    ampm = "am";
  } else {
    ampm = "pm";
  }
  clock.innerText = `${hours}:${minutes} ${ampm}`;
}

getClock();
setInterval(getClock, 1000);
