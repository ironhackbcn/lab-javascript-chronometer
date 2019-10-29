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
    let minutes = chronometer.twoDigitsNumber(chronometer.setMinutes()).split('');    
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.setSeconds()).split('');    
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];    
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
        btnRight.innerHTML = 'SPLIT';
        btnRight.setAttribute('class','btn split');
    }else {
        btnLeft.innerHTML = 'START';
        btnLeft.setAttribute('class','btn start');
        chronometer.stopClick();
        btnRight.innerHTML = 'RESET';
        btnRight.setAttribute('class','btn reset');
    }    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
if(btnRight.innerHTML==='SPLIT') {
    let splitTime = chronometer.twoDigitsNumber(chronometer.setMinutes()) + ':' + chronometer.twoDigitsNumber(chronometer.setSeconds());
    let liElement = document.createElement('li');
    liElement.innerHTML = splitTime;
    document.getElementById('splits').appendChild(liElement);
}else {
    chronometer.resetClick();
    const splitList = document.getElementById("splits");
    while (splitList.firstChild) {
        splitList.removeChild(splitList.firstChild);
    }
}
        
});

setInterval(()=>printTime(),1000);