let timeDiv = document.getElementById("time");
let startTimer = document.getElementById("start");
let stopTimer = document.getElementById("stop");
let resetTimer = document.getElementById("reset");
let timeForBreak = document.getElementById("takeABreak");
let increaseTimer = document.getElementById("increase");
let decreaseTimer = document.getElementById("decrease");
let seconds = 1500;

let timer = { ref: null, isActive: false };

function updateTimer() {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let remainderSeconds = seconds % 60;
  remainderSeconds =
    remainderSeconds < 10 ? "0" + remainderSeconds : remainderSeconds;
  timeDiv.textContent = minutes + ":" + remainderSeconds;
}

function decreaseSeconds() {
  seconds--;
}

function timeLoop() {
  decreaseSeconds();
  updateTimer();
  timeUp();
}

startTimer.addEventListener("click", function() {
  if (!timer.isActive) {
    timer.ref = setInterval(timeLoop, 1000);
    timer.isActive = true;
  }
});

stopTimer.addEventListener("click", function() {
  if (timer.isActive) {
    clearInterval(timer.ref);
    timer.ref = null;
    timer.isActive = false;
  }
});

resetTimer.addEventListener("click", function() {
  seconds = 1500;
  updateTimer();
  timeForBreak.textContent = "";
});

increaseTimer.addEventListener("click", function() {
  seconds += 60;
  updateTimer();
});

decreaseTimer.addEventListener("click", function() {
  if (seconds > 60) {
    seconds -= 60;
    updateTimer();
  }
});

function timeUp() {
  if (seconds <= 0) {
    timeForBreak.textContent = "Time to take a break";
    clearInterval(timer.ref);
    timer.isActive = false;
    seconds = 1500; //reset timer to initial value again
  }
}

updateTimer();
