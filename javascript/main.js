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
  minDec.innerHTML = timeArray[0][0]; // output time values by array index location
  minUni.innerHTML = timeArray[0][1]; 
  secDec.innerHTML = timeArray[1][0]; 
  secUni.innerHTML = timeArray[1][1]; 
}

function printMinutes() {
  
}

function printSeconds() {

}

function printMilliseconds() {

}

function formatTime(time){
  let dirtyTime = time.toString(); // convert the time array to a string
  let cleanTime = dirtyTime.replace(',',':'); // replace , in the string with :
  return cleanTime;
}

function printSplit() {
  let splitsList = document.getElementById('splits');
  let splitTimeItem = document.createElement('li'); // create the list item
  splitTimeItem.innerHTML = formatTime(chronometer.setTime()); // insert the time to the list item
  splitsList.appendChild(splitTimeItem); // add the list item to the list
}

function clearSplits() {
  let splitsList = document.getElementById('splits');
  splitsList.innerHTML = ""; // replace the list items with an empty string
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
  if(btnRight.innerHTML == "SPLIT") { // if the button still display SPLIT
    printSplit(); // keep outputting split times
  } else { // otherwise the button display RESET
    clearSplits(); // remove the split times
    printTime(["00","00"]); // reset the clock to 00:00
  }
});