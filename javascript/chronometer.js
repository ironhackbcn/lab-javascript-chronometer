// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  console.log('in StartClick');
  this.intervalId = setInterval(() => {
    this.setTime();
    this.currentTime += 1;
  }, 1000);
};

Chronometer.prototype.setMinutes = function () {
  var timeInMin = this.currentTime;
  return Math.floor(timeInMin/60);
};

Chronometer.prototype.setSeconds = function (minutes) {
  return Math.floor(this.currentTime - (minutes * 60))
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  return ('0' + num).slice(-2);
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));

  printTime(minutes, seconds);
};

Chronometer.prototype.setMilliseconds = function () {
  
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.setTime();
};

Chronometer.prototype.splitClick = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
  printSplit(minutes, seconds);
};