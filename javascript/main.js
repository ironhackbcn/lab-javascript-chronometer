var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes,seconds) {
    if(minutes >= 0) {
        printMinutes(minutes);
    }
    printSeconds(seconds);
}

function printMinutes(value) {
    minDec.textContent = value.substring(0,1);
    minUni.textContent = value.substring(1,value.length)
}

function printSeconds(value) {
    secDec.textContent = value.substring(0,1);
    secUni.textContent = value.substring(1,value.length);
}

function printMilliseconds(value) {
    milDec.textContent = value.substring(0,1);
    milUni.textContent = value.substring(1,value.length);
}

function printSplit(minute,second,millis) {
    let splits = document.getElementById('splits');
    list = document.createElement('li');
    list.textContent = minute + ':' + second + ':' + millis;
    splits.appendChild(list);
}

function clearSplits() {
    document.querySelector('#splits').innerHTML = ' ';
    }
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.classList.contains('start') === true) {
        btnLeft.textContent ='STOP';
        btnLeft.classList.replace('start','stop');

        btnRight.textContent = 'SPLIT';
        btnRight.classList.replace('reset','split');
        chronometer.startClick();
    }
    else {
        btnLeft.textContent ='START';
        btnLeft.classList.replace('stop','start');

        btnRight.textContent = 'RESET';
        btnRight.classList.replace('split','reset');
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.classList.contains('reset') === true) {
        chronometer.resetClick();
        clearSplits();
    } else {
        chronometer.splitClick();
    }
});
