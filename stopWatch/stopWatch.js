let timeDisplay = document.getElementById("timeDisplay");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let letsStart = true;
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

function start() {
  if (letsStart) {
    interval = setInterval(updateTime, 75);
    console.log(interval);
    letsStart = false;
  }
}
function pause() {
  clearInterval(interval);
  letsStart = true;
}
function reset() {
  timeDisplay.textContent = "00:00:00";
  clearInterval(interval);
  letsStart = true;
  hours = 0;
  minutes = 0;
  seconds = 0;
}
function updateTime() {
  seconds += 1;
  let hour = hours.toString().length < 2 ? "0" + hours : hours;
  let second = seconds.toString().length < 2 ? "0" + seconds : seconds;
  let minute = minutes.toString().length < 2 ? "0" + minutes : minutes;

  if (hours == 13) {
    hours = 1;
  } else if (seconds == 60) {
    minutes += 1;
    seconds = 0;
  } else if (minutes == 60) {
    hours += 1;
    minutes = 0;
  }

  timeDisplay.textContent = `${hour}:${minute}:${second}`;
}
