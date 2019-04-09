var chronometer = new Chronometer();
setCallback();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function setCallback(){
  chronometer.setPrintTime(printTime);
};

function printTime(time) {
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
  if (btnLeft.innerHTML === "START"){
    btnLeft.innerHTML ="STOP";
    btnLeft.classList.toggle("btnstop");
    btnLeft.style.backgroundColor = "red";
    btnRight.classList.toggle("btnsplit");
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
    btnRight.style.backgroundColor = "blue";
  } 
  else if (btnLeft.innerHTML === "STOP"){
    btnLeft.innerHTML ="START";
    btnLeft.classList.toggle("btnstart");
    btnRight.classList.toggle("btnreset");
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
    btnLeft.style.backgroundColor = "green";
    btnRight.style.backgroundColor = "grey";
  }
  
  });


  let olist = document.getElementById("splits");



// Reset/Split Button
btnRight.addEventListener('click', function () {
if (btnRight.innerHTML === "SPLIT"){
  let list = document.createElement("li");
  list.innerHTML = chronometer.setTime();
  list.setAttribute("class", "listItems");
  olist.appendChild(list);
}

if (btnRight.innerHTML === "RESET"){
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  chronometer.resetClick();
  
  var elem1 = document.querySelectorAll('.listItems');
  var elem = [...elem1];
  elem.forEach(function(element){element.parentNode.removeChild(element);
});
}
});




