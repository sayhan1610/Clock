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

setInterval(setClock, 1000);
setClock();
