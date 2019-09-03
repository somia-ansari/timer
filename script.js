const timeRunImg = document.querySelector('img');
let timer;
let hours;
let minutes;
let seconds;
const sound = new Audio("success.wav");
let isRunning = false;


function showNumbs() {
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    document.querySelector('#hours').value = hours;
    document.querySelector('#minutes').value = minutes;
    document.querySelector('#seconds').value = seconds;

}

function start() {
    if (isRunning === false) {
        document.querySelector('#time h1').innerHTML = "";
        timer = setInterval(decreaseTime, 1000);
        isRunning = true;
        timeRunImg.style.display = "inline-block";
        document.querySelector('#start').style.display = "none";
    }
}

function timeUp() {
    if ((seconds + minutes + hours) == 0) {
        sound.play();
        reset();
        document.querySelector('#time h1').innerHTML = "TIME UP!!!";
    }
}

function decreaseTime() {
    hours = parseInt(document.querySelector('#hours').value);
    minutes = parseInt(document.querySelector('#minutes').value);
    seconds = parseInt(document.querySelector('#seconds').value);
    timeUp();

    if ((seconds + minutes + hours) > 0) {
        if (seconds === 0) {
            if (minutes == 0) {
                hours--;
                minutes = 59;
                seconds = 59;
                if (hours == 0) {
                    timeUp();
                }
            } else {
                seconds = 59;
                minutes--;
            }
        } else {
            seconds--;
        }
    }
    if (seconds > 59 || minutes > 59) {
        document.querySelector('#time h1').innerHTML = "Wrong input, give less than 59";
        stop();
    }
    showNumbs();
    timeUp();
}

function stop() {
    clearInterval(timer);
    isRunning = false;
    timeRunImg.style.display = "none";
    document.querySelector('#start').style.display = "inline-block";
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    showNumbs();
    stop();
    document.querySelector('#time h1').innerHTML = "";
}















// if (hours > 0 && minutes > 0 && seconds > 0) {
//     if (seconds == 0) {
//         seconds = 59;
//         minutes--;
//         if (minutes == 0) {
//             hours--;
//             minutes = 59;
//         }
//     }else{
//         seconds--;
//     }
// }
// if (hours > 0 && minutes == 0 && seconds == 0) {
//     seconds = 59;
//     minutes = 59;
//     seconds--;
//     hours--;
//     if (seconds == 0) {
//         seconds = 59;
//         minutes--;
//         if (minutes == 0) {
//             hours--;
//         }
//     }

// }
// if (hours > 0 && minutes > 0 && seconds == 0) {
//     seconds = 59;
//     minutes--;
//     if (minutes == 0) {
//         hours--;
//         minutes = 59;
//     }
// }
// if (hours > 0 && minutes == 0 && seconds > 0) {
//     seconds--;
//     if (seconds == 0 && minutes == 0) {
//         minutes = 59;
//         seconds = 59;
//         hours--;
//     } else if (seconds == 0) {
//         minutes--;
//         seconds = 59;
//     }
// }
// if (hours == 0 && minutes > 0 && seconds == 0) {
//     seconds = 59;
//     minutes--;
//     seconds--;
//     if (seconds == 0) {
//         minutes--;
//         seconds = 59;
//     }
// }
// if (hours == 0 && minutes > 0 && seconds > 0) {
//     seconds--;
//     if (seconds == 0) {
//         seconds = 59;
//         minutes--;
//     }
// }
// if (hours == 0 && minutes == 0 && seconds > 0) {
//     seconds--;
//     timeUp();
// }
// if (seconds > 59 || minutes > 59) {
//     document.querySelector('#time h1').innerHTML = "Wrong input, give less than 59";
//     stop();
// }
