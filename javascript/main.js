var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(timeArray) {
  //printSeconds(timeArray);

  minDec.innerHTML = printMinutes(timeArray[0][0]);
  minUni.innerHTML = printMinutes(timeArray[0][1]);
  secDec.innerHTML = printSeconds(timeArray[1][0]);
  secUni.innerHTML = printSeconds(timeArray[1][1]);
}

function printMinutes(timeArray) {
  return(timeArray[0]);
}

function printSeconds(timeArray) {
  return(timeArray);
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = "START";
}

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split');
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset');
    btnRight.innerHTML = "RESET";
}

function printTimeCallback(){
  
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.innerHTML == "START"){
    setStartBtn();
    setSplitBtn();
    chronometer.startClick();
  } else {
    setStopBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});