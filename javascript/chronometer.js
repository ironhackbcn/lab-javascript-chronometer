function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime++;

    // save our time in a variable so we can pass it to other functions
    const time = this.setTime();
    this.printTimeCallback(time);
    // printTimeCallback(time);
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

  
  // we need to return the minutes and seconds so we can use this data in other functions
  // we can only return one thing, so we put both the minutes and seconds in one array
  return [minutes, seconds];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  // this.startClick();
};

// Chronometer.prototype.splitClick = function () {

// };

Chronometer.prototype.setPrintTime = function(callback) 
{
  this.printTimeCallback = callback;
}