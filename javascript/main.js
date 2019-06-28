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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  if (btnLeft.innerHTML === `STOP`) {
    var interval = setInterval(() => {
      var minutes = chronometer.setTime();
      minUni.innerHTML = `${minutes[1]}`;
      minDec.innerHTML = `${minutes[0]}`;
    }, 1000);
  } else {
    clearInterval(interval);
  }
}

function printSeconds() {
  if (btnLeft.innerHTML === `STOP`) {
    var interval = setInterval(() => {
      var seconds = chronometer.setTime();
      secUni.innerHTML = `${seconds[3]}`;
      secDec.innerHTML = `${seconds[2]}`;
    }, 1000);
  } else {
    clearInterval(interval);
  }
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {
  var splitsList = document.getElementById("splits");
  splitsList.innerHTML = ``;
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  var splittedTime = chronometer.setTime();
  var splitsList = document.getElementById("splits");
  var printerTime = document.createElement("li");

  printerTime.innerHTML = `${splittedTime[0]}${splittedTime[1]}:${
    splittedTime[2]
  }${splittedTime[3]}`;

  splitsList.appendChild(printerTime);
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerText === `START`) {
    btnLeft.classList.remove("start");
    btnLeft.innerText = `STOP`;
    btnLeft.classList.add("stop");

    btnRight.classList.remove("reset");
    btnRight.innerText = `SPLIT`;
    btnRight.classList.add("split");

    setStartBtn();
    printTime();
  } else {
    btnLeft.classList.remove("stop");
    btnLeft.innerText = `START`;
    btnLeft.classList.add("start");

    btnRight.classList.remove("split");
    btnRight.innerText = `RESET`;
    btnRight.classList.add("reset");

    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === `RESET`) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
