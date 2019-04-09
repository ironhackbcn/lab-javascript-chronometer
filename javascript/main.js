var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitsOl    = document.getElementById('splits');
var liTag       = document.getElementsByTagName('li')



function printTime() {
  printMinutes();
  printSeconds()
}

function printMinutes() {
  minDec.innerHTML = chronometer.setTime()[0][0]
  minUni.innerHTML = chronometer.setTime()[0][1]
}

function printSeconds() {
  secDec.innerHTML = chronometer.setTime()[1][0]
  secUni.innerHTML = chronometer.setTime()[1][1]
}

function printMilliseconds() {

}

function printSplit() {
  let newLiTag = document.createElement('li')
  newLiTag.innerHTML = `${chronometer.setTime()[0]} : ${chronometer.setTime()[1]}`
  splitsOl.appendChild(newLiTag);
}

function clearSplits() {
  while (splitsOl.firstChild) {
    splitsOl.removeChild(splitsOl.firstChild);
  }
}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.innerHTML = 'START';
  btnRight.innerHTML = 'RESET';
  btnRight.classList.toggle('split');
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.startClick();
  btnLeft.innerHTML = 'STOP';
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.toggle('split');
}

function setResetBtn() {
  chronometer.currentTime = 0;
  minDec.innerHTML = '0';
  minUni.innerHTML = '0';
  secDec.innerHTML = '0';
  secUni.innerHTML = '0'; 
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  btnLeft.classList.toggle('stop')
  if (btnLeft.innerHTML === 'START') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML === 'SPLIT') {
    setSplitBtn();
  } else {
    setResetBtn() 
  }
});

