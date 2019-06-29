var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  return `${chronometer.twoDigitsNumber(chronometer.getMinutes())[0]}${
    chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  }:${chronometer.twoDigitsNumber(chronometer.getSeconds())[0]}${
    chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  } `;
}

function printMinutes() {
  const intervalMin = setInterval(() => {
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  }, 1000);
  return intervalMin;
}

function printSeconds() {
  const intervalSec = setInterval(() => {
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  }, 1000);
  return intervalSec;
}

function setSplitBtn() {
  let splits = document.getElementById("splits");
  let listElement = document.createElement("li");
  listElement.innerText = printTime();
  splits.appendChild(listElement);
}

function setStartBtn() {
  chronometer.startClick();
  printSeconds();
  printMinutes();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.replace("start", "stop");
    btnLeft.innerText = "STOP";
    btnRight.classList.replace("reset", "split");
    btnRight.innerText = "SPLIT";
    setStartBtn();
  } else {
    btnLeft.classList.replace("stop", "start");
    btnLeft.innerText = "START";
    btnRight.classList.replace("split", "reset");
    btnRight.innerText = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("split")) {
    setSplitBtn();
  } else {
    let orderedList = document.getElementById("splits");
    orderedList.innerHTML = " ";
    chronometer.currentTime = 0;
  }
});

/*
function setResetBtn() {}
function printMilliseconds() {}
function printSplit() {}
function clearSplits() {}
function setStopBtn() {}
*/
