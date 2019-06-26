// Constructor

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.milliSec = 0;
}

Chronometer.prototype.startClick = function() {
  function incrementCurrentTime() {
    this.currentTime++;
    this.setTime();
    printTime();
  }
  this.intervalId = setInterval(incrementCurrentTime.bind(this), 10);
};

Chronometer.prototype.setMinutes = function() {
  return parseInt(this.currentTime / 6000);
};

Chronometer.prototype.setSeconds = function() {
  return (this.currentTime / 100) % 60;
};

Chronometer.prototype.twoDigitsNumber = function(num) {
  if (num === 0) {
    return "00";
  } else if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

Chronometer.prototype.setTime = function() {
  if (this.currentTime % 100 === 0) {
    this.minutes = this.setMinutes();
    this.seconds = this.setSeconds();
  }
  this.milliSec = this.setMilliseconds();
};

Chronometer.prototype.setMilliseconds = function() {
  return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.milliSec = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
