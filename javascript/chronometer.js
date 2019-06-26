// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(
    function() {
      this.currentTime++;
      this.setTime();
    }.bind(this),
    1000
  );
};

Chronometer.prototype.setMinutes = function() {
  var minutes = 0;

  minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  //   var minutes = this.setMinutes();
  var seconds = this.currentTime % 60;

  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function(number) {
  return number.toString().padStart(2, "0");
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  console.log(
    "TCL: Chronometer.prototype.setTime -> this.seconds",
    this.seconds
  );
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
  this.setTime();
};

Chronometer.prototype.splitClick = function() {
  let splitTime;
  splitTime = `${this.minutes}:${this.seconds}`;
  console.log("TCL: Chronometer.prototype.splitClick -> splitTime", splitTime);
  return splitTime;
};
