// Constructor

function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    intervalId = setInterval(function(){
        chronometer.currentTime += 1;
        chronometer.setTime();
     }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    var currentMinutes = (this.currentTime / 60);
    var totalMinutes = Math.floor(currentMinutes);
    return totalMinutes;
};

Chronometer.prototype.setSeconds = function () {
    var currentSeconds = this.currentTime % 60;
    return currentSeconds;
};

// Chronometer.prototype.setMilliseconds = function () {
//     var currentMilliseconds = this.currentTime * 1;
//     var totalMilliseconds = Math.floor(currentMilliseconds)
//     return totalMilliseconds;
// };

Chronometer.prototype.twoDigitsNumber = function (num) {
    var str = "0" + num;
    return str.slice(-2);  
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    //var milliseconds = this.twoDigitsNumber(this.setMilliseconds());
    printTime(minutes, seconds);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
