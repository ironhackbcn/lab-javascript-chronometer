var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
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

function printSplit(minutes, seconds) {
  var list = document.getElementById('splits');
  var item = document.createElement('li');
  item.innerHTML =  minutes+':'+seconds;
  list.appendChild(item);
}

function clearSplits() {
  // set list to ''
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
  chronometer.startClick();
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
}

function setStartBtn() {
  chronometer.stopClick();
  btnLeft.innerHTML = 'START';
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains('reset')) {
    clearSplits()
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }
});
