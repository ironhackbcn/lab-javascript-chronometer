var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitSlot   = document.getElementById('splits');

function printTime() {
  chronometer.printTimeCallback();
  printSeconds()
  printMinutes()
}

function printMinutes() {

  minDec.innerHTML = chronometer.minutes.charAt(0);
  minUni.innerHTML = chronometer.minutes.charAt(1);
}

function printSeconds() {

  secDec.innerHTML = chronometer.seconds.charAt(0);
  secUni.innerHTML = chronometer.seconds.charAt(1);
}

function printMilliseconds() {

}

function printSplit() {
  
  let newListItem = document.createElement('li');
  newListItem.innerHTML = chronometer.printTimeCallback();
  splitSlot.appendChild(newListItem);
  
}

function clearSplits() {
  splitSlot.innerHTML = "";
}

function setStopBtn() {

}

function setSplitBtn(

) {

}

function setStartBtn() {

}

function setResetBtn() {
  chronometer.currentTime = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
}

// Start/Stop Button

  btnLeft.addEventListener('click', function(){
    
    if (this.innerHTML === 'STOP'){

      this.classList.remove('stop');
      this.classList.add('start');
      chronometer.stopClick();
      this.innerHTML = 'START';
      btnRight.classList.remove('split');
      btnRight.classList.add('reset');
      btnRight.innerHTML = 'RESET';
      
    }
    else{

      this.classList.remove('start');
      this.classList.add('stop'); 
      chronometer.startClick();
      this.innerHTML = 'STOP';
      btnRight.classList.remove('reset');
      btnRight.classList.add('split'); 
      btnRight.innerHTML = 'SPLIT';
      
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (this.innerHTML === 'SPLIT'){
    printSplit();
  }
  else{
    setResetBtn();
    clearSplits();

  }

});
console.log(chronometer.setMinutes());