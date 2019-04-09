var chronometer = new Chronometer();
chronometer.setTimeCallback(printTime);

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(value) {
  printSeconds(value[1]);
  printMinutes(value[0]);
}

function printMinutes(minutes) {
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
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
    btnLeft.innerHTML = 'START';
    btnLeft.classList.toggle('btn star'); // this.classList
}

function setSplitBtn() {
  btnRight.innerHTML = 'RESET'
}


function setStartBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.classList.toggle('btn stop');
  
}

function setResetBtn() {
  btnRight.innerHTML = 'SPLIT'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick();
    setStartBtn();
  }
  else if (btnLeft.innerHTML === 'STOP') {
    chronometer.stopClick();
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML ==='RESET') {
    setResetBtn();
    chronometer.stopClick();
    chronometer.resetClick();

  } else if (btnRight.innerHTML === 'SPLIT'){
    setSplitBtn();
  }
});
