// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime();
    this.printTimeCallback();
  }, 1000); 
}

Chronometer.prototype.printTimeCallback = function () {
  printTime();
}


Chronometer.prototype.setMinutes = function () {
  return Number(Math.floor(this.currentTime / 60));  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  if(value < 10) {
    return '0' + value; 
  } else {
    return value + '';
  }
};

Chronometer.prototype.setTime = function () {
  minutes = (this.twoDigitsNumber(this.setMinutes()));
  seconds = (this.twoDigitsNumber(this.setSeconds()));
  return [minutes, seconds]
};


// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.startClick()
};

// Chronometer.prototype.splitClick = function () {

// };
