let timer;
let hours;
let minutes;
let seconds;
let isRunning = false;

function showNumbs() {
    document.querySelector('#hours').value = hours;
    document.querySelector('#minutes').value = minutes;
    document.querySelector('#seconds').value = seconds;
}

function start() {
    if (isRunning === false) {
        document.querySelector('#time h1').innerHTML = "";
        timer = setInterval(decreaseTime, 1000);
        isRunning = true;
    }
}

function timeUp() {
    if (seconds === 0 && minutes === 0 && hours === 0) {
        reset();
        document.querySelector('#time h1').innerHTML = "TIME UP!!!";
    }
}

function decreaseTime() {
    hours = parseInt(document.querySelector('#hours').value);
    minutes = parseInt(document.querySelector('#minutes').value);
    seconds = parseInt(document.querySelector('#seconds').value);

    if (hours > 0 && minutes > 0 && seconds > 0) {
        seconds--;
        if (seconds == 0) {
            seconds = 59;
            minutes--;
            if (minutes == 0) {
                hours--;
                minutes = 59;
            }
        }
    }
    if (hours > 0 && minutes == 0 && seconds == 0) {
        seconds = 59;
        minutes = 59;
        seconds--;
        hours--;
        if (seconds == 0) {
            seconds = 59;
            minutes--;
            if (minutes == 0) {
                hours--;
            }
        }

    }
    if (hours > 0 && minutes > 0 && seconds == 0) {
        seconds = 59;
        minutes--;
        if (minutes == 0) {
            hours--;
            minutes = 59;
        }
    }
    if (hours > 0 && minutes == 0 && seconds > 0) {
        seconds--;
        if (seconds == 0 && minutes == 0) {
            minutes = 59;
            seconds = 59;
            hours--;
        } else if (seconds == 0) {
            minutes--;
            seconds = 59;
        }
    }
    if (hours == 0 && minutes > 0 && seconds == 0) {
        seconds = 59;
        minutes--;
        seconds--;
        if (seconds == 0) {
            minutes--;
            seconds = 59;
        }
    }
    if (hours == 0 && minutes > 0 && seconds > 0) {
        seconds--;
        if (seconds == 0) {
            seconds = 59;
            minutes--;
        }
    }
    if (hours == 0 && minutes == 0 && seconds > 0) {
        seconds--;
        timeUp();
    }
    if (seconds > 59 || minutes > 59) {
        document.querySelector('#time h1').innerHTML = "Wrong input, give less than 59";
        stop();
    }

    showNumbs();
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    hours = 00;
    minutes = 00;
    seconds = 00;
    showNumbs();
    stop();
    document.querySelector('#time h1').innerHTML = "";

}