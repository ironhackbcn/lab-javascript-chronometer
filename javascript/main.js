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
    

}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.setMinutes);
    console.log(minutes);
}

function printSeconds() {

}

function printMilliseconds() {

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
    if(btnLeft.innerHTML === 'START') {
        btnLeft.innerHTML = 'STOP';
        btnLeft.setAttribute('class','btn stop');
        chronometer.startClick();
    }else {
        btnLeft.innerHTML = 'START';
        btnLeft.setAttribute('class','btn start');
        chronometer.stopClick();
    }    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML === 'RESET') {
        btnRight.innerHTML = 'SPLIT';
        btnRight.setAttribute('class','btn split');
    }else {
        btnRight.innerHTML = 'RESET';
        btnRight.setAttribute('class','btn reset');
    } 
});