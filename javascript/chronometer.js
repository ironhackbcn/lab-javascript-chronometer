// Constructor
function Chronometer() {

    this.currentTime = 0;
    this.intervalId = null;
  
}

 Chronometer.prototype.startClick = function () {
this.intervalId = setInterval(() =>{
  this.currentTime+= 1;
}, 1000)
};

 Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime/ 60)
  return minutes;
};

 Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime % 60;
  return seconds;
 };

 Chronometer.prototype.twoDigitsNumber = function () {
 if (minutes < 10 && seconds < 10) {
   minutes = "0" + minutes;
   seconds = "0" + seconds;
 } else if (minutes < 10) {
  minutes = "0" + minutes;
 } else if (seconds < 10){
  seconds = "0" + seconds;
 } else {
   return minutes;
 }

 };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
