var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function setStartStopBtn() {
  if (chronometer.running === true) {
    chronometer.stopClick();
    btnLeft.className = "btn start";
    btnLeft.innerText = "START";
    btnRight.className = "btn reset";
    btnRight.innerText = "RESET";
  } else {
    chronometer.digits = {
      decMin: minDec,
      uniMin: minUni,
      decSec: secDec,
      uniSec: secUni
    };
    chronometer.startClick();
    btnLeft.className = "btn stop";
    btnLeft.innerText = "STOP";
    btnRight.className = "btn split";
    btnRight.innerText = "SPLIT";
  }
}
function splitTime() {
  const li = document.createElement("li");
  li.innerText = chronometer.minutes + ":" + chronometer.seconds;
  document.getElementById("splits").appendChild(li);
}
function setResetSplitBtn() {
  if (chronometer.running === true) {
    splitTime();
  } else {
    chronometer.resetClick();
    clearListSplits();
  }
}
function clearListSplits() {
  document.getElementById("splits").innerHTML = "";
}
// Start/Stop Button
btnLeft.addEventListener("click", setStartStopBtn);

// Reset/Split Button
btnRight.addEventListener("click", setResetSplitBtn);
