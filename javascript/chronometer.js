// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.intervalMilliId = 0;
  this.milliSeconds = 0;
}

Chronometer.prototype.startClick = function() {
  this.intervalMilliId = setInterval(
    function() {
      this.milliSeconds++;
      console.log(this);
      this.setMilliseconds();
      printMilliseconds();
    }.bind(this),
    10
  );

  // this.intervalId = setInterval(
  //   function() {
  //     this.currentTime++;
  //     this.setTime();
  //     printTime();
  //     console.log(this);
  //   }.bind(this),
  //   1000
  // );
};

Chronometer.prototype.setMinutes = function() {
  var minutes = 0;

  minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
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

Chronometer.prototype.setMilliseconds = function() {
  if (this.milliSeconds >= 100) {
    this.milliSeconds = this.twoDigitsNumber(0);
    this.currentTime++;
    this.setTime();
    // printMilliseconds();
    printTime();
    // this.milliSeconds = this.twoDigitsNumber(0);
  }
  this.milliSeconds = this.twoDigitsNumber(this.milliSeconds);
};

Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
  clearInterval(this.intervalMilliId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
  this.milliSeconds = this.twoDigitsNumber(0);
  this.setTime();
};

Chronometer.prototype.splitClick = function() {
  let splitTime;
  splitTime = `${this.minutes}:${this.seconds}:${this.milliSeconds}`;
  console.log("TCL: Chronometer.prototype.splitClick -> splitTime", splitTime);
  return splitTime;
};
