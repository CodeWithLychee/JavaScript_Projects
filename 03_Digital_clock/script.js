const dateDiv = document.getElementById("date");
const timeDiv = document.getElementById("clock");

setInterval(function () {
  const date = new Date();
  let today_date = date.toDateString();
  let time = date.toLocaleTimeString();
  dateDiv.innerHTML = `${today_date}`;
  timeDiv.innerHTML = `${time}`;
}, 1000);
