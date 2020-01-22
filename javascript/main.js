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
printMinutes();
printSeconds();
}

function printMinutes() {
minDec.innerHTML = chronometer.setTime()[0][0]
minUni.innerHTML = chronometer.setTime()[0][1]
}

function printSeconds() {
secDec.innerHTML = chronometer.setTime()[1][0]
secUni.innerHTML = chronometer.setTime()[1][1]
}

//function printMilliseconds() {
//
//}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
btnLeft.innerHTML = 'STOP';
btnLeft.className = 'btn stop';
}

function setSplitBtn() {
btnRight.innerHTML = 'SPLIT';
btnRight.className = 'btn split'
}

function setStartBtn() {
btnLeft.innerHTML = 'START';
btnLeft.className = 'btn start';
}

function setResetBtn() {
btnRight.innerHTML = 'RESET';
btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
if (btnLeft.innerHTML === 'START') {
    chronometer.startClick();
setStopBtn();
setSplitBtn();
}
else {
    chronometer.stopClick();
setStartBtn();
setResetBtn();
}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
} 
else {
    chronometer.splitClick();
}
});
