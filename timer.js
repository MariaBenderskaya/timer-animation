let second = 0;
let minute = 0;
let interval;
let limitTime = 2;

const startTimer = () => {
  second += 1;
  document.getElementById("circle-timer__second").innerHTML = "0" + second;
  if (second > 9) {
    document.getElementById("circle-timer__second").innerHTML = second;
  }
  if (second > 59) {
    minute += 1;
    document.getElementById("circle-timer__minutes").innerHTML = "0" + minute;
    second = 0;
    document.getElementById("circle-timer__second").innerHTML = "0" + second;
  }
  if (minute > 9) {
    document.getElementById("circle-timer__minutes").innerHTML = minute;
  }
  if (minute == limitTime) {
    clearInterval(interval);
  }
};
window.addEventListener("load", () => {
  interval = setInterval(startTimer, 1000);
});
