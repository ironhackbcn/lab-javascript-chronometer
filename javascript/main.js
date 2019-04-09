var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    printMinutes()
    printSeconds()
    printMilliseconds()
}

function printMinutes() {
    if(!chronometer.minutes[0]){
        minDec.innerHTML = 0
        minUni.innerHTML = 0
    } else {
        minDec.innerHTML = chronometer.minutes[0]
        minUni.innerHTML = chronometer.minutes[1]
    }  
}

function printSeconds() {
    if(!chronometer.minutes[0]){
        secDec.innerText = 0
        secUni.innerText = 0
    } else {
        secDec.innerHTML = chronometer.seconds[0]
        secUni.innerHTML = chronometer.seconds[1]
    }
}

function printMilliseconds() {
    if(!chronometer.milliseconds[0]){
        milDec.innerText = 0
        milUni.innerText = 0
    } else {
        milDec.innerHTML = chronometer.milliseconds[0]
        milUni.innerHTML = chronometer.milliseconds[1]
    }
}

function printSplit(list) {
    let newElement = document.createElement('li')
    newElement.innerHTML = `${chronometer.minutes}:${chronometer.seconds}:${chronometer.milliseconds}`
    list.appendChild(newElement)
}

function clearSplits(list) {
    let allLi = list.querySelectorAll('li')
    allLi.forEach(element => {
        list.removeChild(element)
    });
}

function setStopBtn(id) {
    btnLeft.innerHTML = 'STOP'
    btnLeft.className = 'btn stop'
}

function setSplitBtn(id) {
    btnRight.innerHTML = 'SPLIT'
    btnRight.className = 'btn split'
}

function setStartBtn(id) {
    btnLeft.innerHTML = 'START'
    btnLeft.className = 'btn start'
}

function setResetBtn(id) {
    btnRight.innerHTML = 'RESET'
    btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className === 'btn start') {
        setStopBtn()
        setSplitBtn()
        printMinutes()
        chronometer.startClick()
    } else {
        setStartBtn()
        setResetBtn()
        chronometer.stopClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    let list = document.getElementById('splits')
    if (btnRight.className === 'btn split') {
        printSplit(list)
    } else {
        chronometer.minutes = 0
        chronometer.seconds = 0
        chronometer.milliseconds = 0;
        printTime()
        clearSplits(list)
    }
});
