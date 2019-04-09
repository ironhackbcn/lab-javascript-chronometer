var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {

  printMinutes();
  printSeconds();
  printMilliseconds();
}


function printMinutes() {

  currentMinutes = chronometer.setMinutes();
  minDec.innerHTML = Math.floor(currentMinutes / 10);
  minUni.innerHTML = currentMinutes % 10;
}


function printSeconds() {

  currentSeconds = chronometer.setSeconds();
  secDec.innerHTML = Math.floor(currentSeconds / 10);
  secUni.innerHTML = currentSeconds % 10;
}


function printMilliseconds() {

  currentMilliseconds = chronometer.setMilliseconds();
  milDec.innerHTML = Math.floor(currentMilliseconds / 10);
  milUni.innerHTML = currentMilliseconds % 10;
}


function printSplit() {

  let split = chronometer.setTime();
  let splitList = document.getElementById('splits');
  let listElement = document.createElement('li');
  listElement.innerHTML = `${split[0]}:${split[1]}:${split[2]}`;
  splitList.appendChild(listElement);
}


function clearSplits() {

  chronometer.resetClick();
  let splitList = document.getElementById('splits');
  splitList.innerHTML = '';
}


function setStopBtn() {

  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = "STOP";
}


function setSplitBtn() {

  btnRight.setAttribute('class', 'btn split');
  btnRight.innerHTML = "SPLIT"
}


function setStartBtn() {

  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = "START";
}


function setResetBtn() {

  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerHTML = "RESET";
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  if(btnLeft.getAttribute('class') === 'btn start') {

    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  }
  else if(btnLeft.getAttribute('class') === 'btn stop'){

    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});


// Reset/Split Button
btnRight.addEventListener('click', function () {

  if(btnLeft.getAttribute('class') === 'btn stop'){

    printSplit();
  }
  else if(btnLeft.getAttribute('class') === 'btn start'){
    
    clearSplits();
  }
});


//Start the print
setInterval(printTime, 100);
