let timer;
let isRunning = false;
let time = 0;
let laps = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.querySelector('.buttons button').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
        document.querySelector('.buttons button').textContent = 'Stop';
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    laps = [];
    document.getElementById('time').textContent = '00:00:00';
    document.querySelector('.buttons button').textContent = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = formatTime(time);
        laps.push(lapTime);
        const lapElement = document.createElement('li');
        lapElement.textContent = `Lap ${laps.length}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapElement);
    }
}

function updateTime() {
    time++;
    document.getElementById('time').textContent = formatTime(time);
}

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}