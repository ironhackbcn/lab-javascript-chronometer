var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();



}

function printMinutes(timeArr) {
  //  console.log(timeArr); // ["00", "01"]
  //  let minutes = timeArr[0];
  //  let seconds = timeArr[1];
  let minUnits = Math.trunc(chronometer.setMinutes() / 10);
  document.getElementById("minDec").innerHTML = minUnits;

  let minMinutes = chronometer.setMinutes() % 10;
  document.getElementById("minUni").innerHTML = minMinutes;

}

function printSeconds() {

  let secUnits = Math.trunc(chronometer.setSeconds() / 10);
  document.getElementById("secDec").innerHTML = secUnits;

  let secSeconds = chronometer.setSeconds() % 10;
  document.getElementById("secUni").innerHTML = secSeconds;

}

function printMilliseconds() {

  // let msecUnits = Math.trunc(chronometer.setMiliseconds() / 1000);
  // document.getElementById("milDec").innerHTML = msecUnits;

  // let msecSeconds = chronometer.setMiliseconds() % 1000;
  // document.getElementById("milUni").innerHTML = msecSeconds;


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
  chronometer.resetClick();
  document.getElementById("minDec").innerHTML = 0;
  document.getElementById("minUni").innerHTML = 0;
  document.getElementById("secDec").innerHTML = 0;
  document.getElementById("secUni").innerHTML = 0;

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.getAttribute("class") === "btn start") {
    btnLeft.setAttribute("class", "btn stop");
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";

    btnLeft.innerHTML = "STOP";
    chronometer.startClick();
  } else if (btnLeft.getAttribute("class") === "btn stop") {
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerHTML = "START";
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerHTML = "RESET";

    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.getAttribute("class") === "btn reset") {
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";
    setResetBtn();
    chronometer.stopClick();

    //chronometer.resetClick();
  } else if (btnRight.getAttribute("class") === "btn split") {
    // btnRight.setAttribute("class", "btn reset");
    // btnRight.innerHTML = "RESET";
    //chronometer.stopClick();
  }
});



setInterval(printTime, 1);