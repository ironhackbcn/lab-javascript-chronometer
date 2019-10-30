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
  console.log(chronometer.currentTime)
}

function printMinutes(minutes) {
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}


// function printMilliseconds() {
//   console.log('printMilliseconds() was called!');
// }

function printSplit(minutes, seconds) {
  var splitEl = minutes + ':' + seconds;
  var liEl = document.createElement('li');
  liEl.innerHTML = splitEl;
  var splitlist = document.getElementById('splits');
  splitlist.appendChild(liEl);
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
  console.log('setStopBtn() was called!');
  chronometer.stopClick();
  clearSplits()
}

function setSplitBtn() {
  chronometer.splitClick();
}

function setStartBtn() {
  console.log('setStartBtn() was called!');
  chronometer.startClick();
}

function setResetBtn() {
  console.log('setResetBtn() was called!');
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.classList.contains("start")) {
    setStartBtn();
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');  
    btnLeft.innerHTML = 'STOP';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');  
    btnRight.innerHTML = 'SPLIT';
  } else {
    setStopBtn();
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerHTML = 'START';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');  
    btnRight.innerHTML = 'RESET';
  }  
});



// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.classList.contains("reset")) {
    setResetBtn();
  } else {
    setSplitBtn();
  }  
});
