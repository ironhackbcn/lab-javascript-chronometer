// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.callback = function () {
    printTime();
  }
  this.milisecondsCounter = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime();
    this.callback();
  }, 1000);

  this.milisecondIntervalId = setInterval(() => {
    this.milisecondsCounter++;
    this.setTime();
    this.callback();
  }, 10);

};

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime / 6000);
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime % 6000;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  var str = "0" + value;
  return str.slice(-2);
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
  this.seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
  this.miliseconds = this.twoDigitsNumber(this.setMilliseconds(this.milisecondsCounter));
};

Chronometer.prototype.setMilliseconds = function () {
  var miliseconds = this.milisecondsCounter % 100;
  return miliseconds;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.milisecondIntervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.milisecondsCounter = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
