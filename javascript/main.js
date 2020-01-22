var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');

var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var splits      = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  var minutes = chronometer.minutes;
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  var seconds = chronometer.seconds;
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
  var milisec = chronometer.miliseconds;
  milDec.innerHTML = milisec[0];
  milUni.innerHTML = milisec[1];
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
  if(btnLeft.innerHTML === "START") {
    btnLeft.textContent = "STOP";
    btnLeft.className = "btn stop";
    btnRight.textContent = "SPLIT";
    btnRight.className = "btn split";
    chronometer.startClick();
  } else {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML === "SPLIT") {
    var newTime = document.createElement("li");
    newTime.innerHTML = `${minDec.innerHTML}${minUni.innerHTML} : ${secDec.innerHTML}${secUni.innerHTML} : ${milDec.innerHTML}${milUni.innerHTML}`;
    splits.appendChild(newTime);
  } else {
    chronometer.resetClick();
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    milDec.innerHTML = 0;
    milUni.innerHTML = 0;
  }
});
