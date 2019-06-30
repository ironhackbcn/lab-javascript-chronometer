var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var listSplits = document.getElementById('splits');

function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    let min = chronometer.minutes + "";
    let splode = min.split("");
    minUni.innerHTML = splode[1];
    minDec.innerHTML = splode[0];
}

function printSeconds() {
    let sec = chronometer.seconds + "";
    let splode = sec.split("");
    secDec.innerHTML = splode[0];
    secUni.innerHTML = splode[1];
}

function printMilliseconds() {

}

function printSplit() {
    let newNode = document.createElement('li');
    let newTextNode = document.createTextNode(`${chronometer.minutes} : ${chronometer.seconds}`);
    newNode.appendChild(newTextNode)
    listSplits.appendChild(newNode);
}

function clearSplits() {
    listSplits.innerHTML = "";
}

function setStopBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.setAttribute('class', 'btn start')
    chronometer.stopClick();
    printSplit();
}

function setSplitBtn() {
    btnRight.innerHTML = 'RESET';
    btnRight.setAttribute('class', 'btn reset');
}

function setStartBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.setAttribute('class', 'btn stop')
    chronometer.startClick();

    setInterval(() => {
        printTime();
    }, 1000);
}

function setResetBtn() {
    btnRight.innerHTML = 'SPLIT';
    btnRight.setAttribute('class', 'btn split');
    chronometer.resetClick();
    clearSplits();
    chronometer.setTime();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.getAttribute('class') === 'btn start') {
        setStartBtn();
    }
    else {
        setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.getAttribute('class') === 'btn reset') {
        setResetBtn();
    } else {
        setSplitBtn();
    }
});


