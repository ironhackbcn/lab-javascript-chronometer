var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splitsList = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  if (this.minutes < 10) {
    minUni.innerHTML = chronometer.minutes;
  }
  minUni.innerHTML = chronometer.minutes % 10;
  minDec.innerHTML = (chronometer.minutes - (chronometer.minutes % 10)) / 10;
}

function printSeconds() {
  if (this.seconds < 10) {
    secUni.innerHTML = chronometer.seconds;
  }
  secUni.innerHTML = chronometer.seconds % 10;
  secDec.innerHTML = (chronometer.seconds - (chronometer.seconds % 10)) / 10;
}

function printMilliseconds() {
  if (this.milliSec < 10) {
    milUni.innerHTML = chronometer.milliSec;
  }
  milUni.innerHTML = chronometer.milliSec % 10;
  milDec.innerHTML = (chronometer.milliSec - (chronometer.milliSec % 10)) / 10;
}

// function printSplit() {}

function clearSplits() {
  while (splitsList.hasChildNodes()) {
    splitsList.removeChild(splitsList.firstChild);
  }
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  var split = document.createElement("li");
  split.innerHTML = `${chronometer.twoDigitsNumber(
    chronometer.minutes
  )}:${chronometer.twoDigitsNumber(
    chronometer.seconds
  )}:${chronometer.twoDigitsNumber(chronometer.milliSec)}`;
  splitsList.appendChild(split);
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  clearSplits();
  chronometer.resetClick();
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.replace("start", "stop");
    btnLeft.innerHTML = "STOP";
    btnRight.classList.replace("reset", "split");
    btnRight.innerHTML = "SPLIT";
    setStartBtn();
  } else if (btnLeft.classList.contains("stop")) {
    btnLeft.classList.replace("stop", "start");
    btnLeft.innerHTML = "START";
    btnRight.classList.replace("split", "reset");
    btnRight.innerHTML = "RESET";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("split")) {
    setSplitBtn();
  } else if (btnRight.classList.contains("reset")) {
    setResetBtn();
  }
});
