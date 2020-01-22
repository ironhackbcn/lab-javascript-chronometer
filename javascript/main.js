var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    const minutesPrint = chronometer.minutes
    minDec.innerHTML = minutesPrint[0];
    minUni.innerHTML = minutesPrint[1];
}

function printSeconds() {
    const secondPrint = chronometer.seconds
    console.log(secondPrint);
    secDec.innerHTML = secondPrint[0];
    secUni.innerHTML = secondPrint[1]
}

function printMilliseconds() {
    const msPrint = chronometer.MS
    milDec.innerHTML = msPrint[0];
    milUni.innerHTML = msPrint[1]
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")) { // crono not running
        btnLeft.innerHTML = "STOP";
        btnLeft.classList.remove("start");
        btnLeft.classList.add("stop")
        btnRight.innerHTML = "SPLIT";
        btnRight.classList.add("split");
        btnRight.classList.remove('reset');
        chronometer.startClick();
    } else if (this.classList.contains("stop")) { //chrono is running
        btnLeft.innerHTML = "START";
        btnLeft.classList.remove("stop");
        btnLeft.classList.add("start");
        btnRight.innerHTML = "RESET"
        btnRight.classList.add('reset');
        btnRight.classList.remove('split');
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.classList.contains('split')) {
        chronometer.splitClick()
    }
    else if (btnRight.classList.contains('reset')) {
        chronometer.resetClick()
    }
});
