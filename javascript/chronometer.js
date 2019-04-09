// Constructor
function Chronometer() {

  this.currentTime = 0;
  this.intervalId = null;
}


Chronometer.prototype.startClick = function() {

  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime();
  }, 10); 
}


Chronometer.prototype.setMinutes = function () {

  return Number(Math.floor((this.currentTime/100) / 60));  
};


Chronometer.prototype.setSeconds = function () {

  return (Math.floor(this.currentTime/100) % 60);
};


Chronometer.prototype.twoDigitsNumber = function (value) {

  value = String(value);
  if(value < 10) {
    return 0 + value; 
  } else {
    return value;
  }
};


Chronometer.prototype.setTime = function () {

  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var milliseconds = this.twoDigitsNumber(this.setMilliseconds());

  return [minutes, seconds, milliseconds];
};


Chronometer.prototype.setMilliseconds = function () {

  return this.currentTime % 60;
};


Chronometer.prototype.stopClick = function () {

  clearInterval(this.intervalId);  
};


Chronometer.prototype.resetClick = function () {
  
  this.currentTime = 0;
};