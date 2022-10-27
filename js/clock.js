const clock = document.querySelector("h2#clock");
const today = document.querySelector("h3#today");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  let ampm = "";
  if (date.getHours < 12) {
    ampm = "am";
  } else {
    ampm = "pm";
  }
  clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const month = date.getMonth();
  const day = date.getDate();
  today.innerText = `${month + 1}월 ${day}일 ${week[date.getDay()]}요일`;
}

getClock();
setInterval(getClock, 1000);
