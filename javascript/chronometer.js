function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.currentMilliseconds = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval( () => { // using arrow function we can use this because its scope is from it was created. if not, we should have declared a var that = this outside the setInterval so that our 'that' it has the scope from the function
    this.currentTime += 1;
    this.setTime();
  },1000);

  this.millisecondsIntervalId = setInterval( () => {
    if (this.currentMilliseconds === 99) {
      this.currentMilliseconds = 0;
    }
    this.setMilliseconds();
    this.currentMilliseconds += 1;
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return (Math.floor(this.currentTime/60))
};

Chronometer.prototype.setSeconds = function (minutes) {
  return (Math.floor(this.currentTime) - (minutes*60))
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return ('0'+ value).slice(-2)
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
  
  printTime(minutes, seconds);
};

Chronometer.prototype.setMilliseconds = function () {
  var milliseconds = this.twoDigitsNumber(this.currentMilliseconds);
  printMilliseconds(milliseconds);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.millisecondsIntervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.currentMilliseconds = 0;
  this.setTime();
  this.setMilliseconds();
};

Chronometer.prototype.splitClick = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
  var milliseconds = this.twoDigitsNumber(this.currentMilliseconds);
  
  printSplit(minutes, seconds, milliseconds);
};