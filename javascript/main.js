var chronometer = new Chronometer();
chronometer.setPrintTime(printTime);
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime(time) {
  // console.log(time) will return [00, 01], for example
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

// QUESTION - I want to remove the variables splitLi and splitOl and place them at the top of the scrip along with the other selected elements, but when i do this, I am only allowed to add one splitLi to my splitOl list, and it just keeps updating the splitLi! WHY?

function printSplit() {
  var splitLi = document.createElement('li');
  var splitOl = document.getElementById('splits');
  var time = chronometer.setTime();
  var minutes = time[0];
  var seconds = time[1];
  splitLi.innerHTML = `${minutes}:${seconds}`;

  splitOl.appendChild(splitLi);
}

function clearSplits() {
  var splitOl = document.getElementById('splits');
  var liNodeList = document.querySelectorAll('li');
  var liArray = [...liNodeList];
  for(var i = 0; i < liArray.length; i++) {
    splitOl.removeChild(liArray[i]);
  }
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

//////////// START AND STOP BUTTONS ////////////

btnLeft.addEventListener('click', function () {
  if (btnLeft.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
  } 

  else if (btnLeft.className === 'btn stop') {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

//////////// RESET AND SPLIT BUTTONS ////////////

btnRight.addEventListener('click', function () {

  if(btnRight.className === 'btn split') {
    printSplit();
  }

  if(btnRight.className === 'btn reset') {
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    chronometer.resetClick();
    clearSplits();
  }
});


