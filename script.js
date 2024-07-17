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
  }
  
  let stopwatchInterval;
  let stopwatchTime = 0;
  
  function updateStopwatch() {
    stopwatchTime += 1;
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    document.getElementById('stopwatch-display').innerText =
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
  }
  
  function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').innerText = '00:00:00';
  }
  
  document.getElementById('clock').addEventListener('click', toggleMenu);
  document.getElementById('stopwatch').addEventListener('click', showStopwatch);
  document.getElementById('back-to-clock').addEventListener('click', showClock);
  document.getElementById('start-stopwatch').addEventListener('click', startStopwatch);
  document.getElementById('stop-stopwatch').addEventListener('click', stopStopwatch);
  document.getElementById('reset-stopwatch').addEventListener('click', resetStopwatch);
  
  setInterval(setClock, 1000);
  setClock();
  