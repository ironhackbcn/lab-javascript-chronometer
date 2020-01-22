// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime % 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  var str = "0" + value;
  return str.slice(-2);
};

Chronometer.prototype.setTime = function () {
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

// };
