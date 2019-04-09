//Constructor
// function Chronometer() {

/* function Chronometer (){
  this.currentTime = 0;
  this.intervalId=0;
}
 */
// }


// Chronometer.prototype.startClick = function () {

/* Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(()=>{this.currentTime +=1;}, 1000);
   
} */

// };

// Chronometer.prototype.setMinutes = function () {

/* Chronometer.prototype.setMinutes = function () {
  return (Math.floor(this.currentTime/60));
}; */

// };

// Chronometer.prototype.setSeconds = function () {
  
/* Chronometer.prototype.setSeconds = function () {
  return (this.currentTime % 60)
}; */

// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
/* Chronometer.prototype.twoDigitsNumber = function (number) {
  return (("0" + number).slice(-2));
}; */

//

/* Chronometer.prototype.setTime = function () {
  let minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
  this.setTime = this.startClick(setInterval);
};
 */
// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

// SOLUTION //

// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime++;
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
  this.startClick()
};

// Chronometer.prototype.splitClick = function () {

// };

Chronometer.prototype.setTimeCallback = function(callback) {
  this.printTimeCallback = callback;
}