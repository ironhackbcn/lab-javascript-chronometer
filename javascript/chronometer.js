function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime();
    const time = this.setTime();
    this.printTimeCallback(time);
  }, 1000); 
}

Chronometer.prototype.setMinutes = function () {
  return Number(Math.floor(this.currentTime / 60));  
};


Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
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
  return [minutes, seconds];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;

};

// Chronometer.prototype.splitClick = function () {

// }

Chronometer.prototype.setPrintTime = function(callback){
  this.printTimeCallback = callback;
}