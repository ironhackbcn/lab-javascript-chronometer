var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var intervalId;
var splitTime;

function printTime() {
  console.log(`Dentro PrintTime`);
  printSeconds();
  printMinutes();
}

function printMinutes() {
  console.log(`Dentro PrintMinutes`);
  let minutes = chronometer.minutes;
  console.log("TCL: printMinutes -> minutes", minutes);

  minutesUni = minutes.toString().slice(1);
  minutesDec = minutes.toString().slice(0, 1);
  minUni.innerHTML = `${minutesUni}`;
  minDec.innerHTML = `${minutesDec}`;
}

function printSeconds() {
  console.log(`Dentro PrintSeconds`);
  let seconds = chronometer.seconds;
  console.log("TCL: printSeconds -> seconds", seconds);

  secondsUni = seconds.toString().slice(1);
  secondsDec = seconds.toString().slice(0, 1);
  secUni.innerHTML = `${secondsUni}`;
  secDec.innerHTML = `${secondsDec}`;
}

function printMilliseconds() {}

function printSplit() {
  let split = document.getElementById("splits");
  let splitNewLi = document.createElement("li");
  splitNewLi.innerHTML = `${splitTime}`;
  split.appendChild(splitNewLi);
}

function clearSplits() {
  let splits = document.getElementById("splits");
  while (splits.hasChildNodes()) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  console.log(`START to STOP`);
  btnLeft.innerHTML = `STOP`;
  btnLeft.classList.replace("start", "stop");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.replace("reset", "split");
}

function setStartBtn() {
  console.log(`STOP to START`);
  btnLeft.innerHTML = `START`;
  btnLeft.classList.replace("stop", "start");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.replace("split", "reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    setStopBtn();
    setSplitBtn();

    chronometer.startClick();

    intervalId = setInterval(function() {
      printTime();
    }, 1000);

    // printTime();
  } else {
    setStartBtn();
    setResetBtn();

    chronometer.stopClick();
    clearInterval(intervalId);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("split")) {
    splitTime = chronometer.splitClick();
    printSplit();

    // Si tengo tiempo intentaré hacer contador de vueltas. El Split de verdad...
    // let lapChrono = new Chronometer();
  } else {
    chronometer.resetClick();
    printTime();
    clearSplits();
  }
});
