function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  document.getElementById('second-hand').style.transform = `translate(-50%, -80%) rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
  document.getElementById('minute-hand').style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
  document.getElementById('hour-hand').style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

function showStopwatch() {
  document.getElementById('clock').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('stopwatch-card').style.display = 'block';
  document.getElementById('stopwatch-menu').style.display = 'flex';
}

function showClock() {
  document.getElementById('clock').style.display = 'block';
  document.getElementById('menu').style.display = 'block';
  document.getElementById('stopwatch-card').style.display = 'none';
  document.getElementById('stopwatch-menu').style.display = 'none';
  document.getElementById('timer-card').style.display = 'none';
  document.getElementById('timer-menu').style.display = 'none';
}

function showTimer() {
  document.getElementById('clock').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('timer-card').style.display = 'block';
  document.getElementById('timer-menu').style.display = 'flex';
}

let stopwatchInterval;
let stopwatchTime = 0;
let isMuted = true;

function updateStopwatch() {
  stopwatchTime += 10;
  const hours = Math.floor(stopwatchTime / 3600000);
  const minutes = Math.floor((stopwatchTime % 3600000) / 60000);
  const seconds = Math.floor((stopwatchTime % 60000) / 1000);
  const milliseconds = Math.floor((stopwatchTime % 1000) / 10); // Convert milliseconds to 2 digits
  document.getElementById('stopwatch-display').innerText =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById('stopwatch-display').innerText = '00:00:00.00';
}

let timerInterval;
let timerTime = 0;

function updateTimer() {
  if (timerTime > 0) {
    timerTime -= 1;
    const hours = Math.floor(timerTime / 3600);
    const minutes = Math.floor((timerTime % 3600) / 60);
    const seconds = timerTime % 60;
    document.getElementById('timer-display').innerText =
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else {
    clearInterval(timerInterval);
    playTimerSound();
  }
}

function startTimer() {
  const hoursInput = document.getElementById('hours-input').value;
  const minutesInput = document.getElementById('minutes-input').value;
  const secondsInput = document.getElementById('seconds-input').value;

  timerTime = (parseInt(hoursInput) || 0) * 3600 + (parseInt(minutesInput) || 0) * 60 + (parseInt(secondsInput) || 0);

  if (timerTime > 0) {
    document.getElementById('timer-display').innerText =
      `${String(Math.floor(timerTime / 3600)).padStart(2, '0')}:${String(Math.floor((timerTime % 3600) / 60)).padStart(2, '0')}:${String(timerTime % 60).padStart(2, '0')}`;
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerTime = 0;
  document.getElementById('timer-display').innerText = '00:00:00';
  document.getElementById('hours-input').value = '';
  document.getElementById('minutes-input').value = '';
  document.getElementById('seconds-input').value = '';
}

function playTimerSound() {
  const audio = document.getElementById('timer-audio');
  audio.play();
  document.getElementById('dismiss-timer').style.display = 'block';
}

function dismissTimer() {
  const audio = document.getElementById('timer-audio');
  audio.pause();
  audio.currentTime = 0;
  document.getElementById('dismiss-timer').style.display = 'none';
  resetTimer();
}

function toggleMute() {
  const audio = document.getElementById('tick-audio');
  const muteButton = document.getElementById('mute-button');
  isMuted = !isMuted;
  audio.muted = isMuted;
  muteButton.innerText = isMuted ? '🔇' : '🔊';
}

document.getElementById('clock').addEventListener('click', toggleMenu);
document.getElementById('stopwatch').addEventListener('click', showStopwatch);
document.getElementById('timer').addEventListener('click', showTimer);
document.getElementById('back-to-clock').addEventListener('click', showClock);
document.getElementById('start-stopwatch').addEventListener('click', startStopwatch);
document.getElementById('stop-stopwatch').addEventListener('click', stopStopwatch);
document.getElementById('reset-stopwatch').addEventListener('click', resetStopwatch);
document.getElementById('mute-button').addEventListener('click', toggleMute);
document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('stop-timer').addEventListener('click', stopTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);
document.getElementById('dismiss-timer').addEventListener('click', dismissTimer);
document.getElementById('back-to-clock-timer').addEventListener('click', showClock);

setInterval(setClock, 1000);
setClock();
