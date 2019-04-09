
var chronometer = new Chronometer();

chronometer.setPrintTimeCallbackFunction(printTime);

var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');




function printTime(time) { // ['00', '01' ]
  printMinutes(time[0]);
  printSeconds(time[1]);
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

  let orderedList = document.getElementById('splits')
  let newListItem = document.createElement('li');
  newListItem.innerHTML = chronometer.setTime();

  orderedList.appendChild(newListItem);

}

function clearSplits() {

  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;

  let orderedList = document.getElementById('splits')

  while (orderedList.lastChild) {
    orderedList.removeChild(orderedList.lastChild);
  }

}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === 'btn start') {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();

  } else if (btnLeft.className === 'btn stop') {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (btnRight.className === 'btn reset') {
    chronometer.resetClick();
    clearSplits();
  }
  if (btnRight.className === 'btn split') {
    printSplit();
  }

});
