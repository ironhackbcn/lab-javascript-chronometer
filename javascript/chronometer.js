// Constructor
 function Chronometer() {
    
    this.intervalId=0;
    this.currentTime=0;
    this.callBack=function(){
      printTime();
    }
 }

Chronometer.prototype.startClick = function () {
intervalId = setInterval(()=>{
    this.currentTime++;
    this.setTime();
    this.callBack();
},1000)
};

Chronometer.prototype.setMinutes = function () {
  
  var min=Math.floor(this.currentTime /60);
  return min;
};

Chronometer.prototype.setSeconds = function () {
  
  var sec=this.currentTime%60;
  return sec;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  return `${concatZero(num)}`;
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    return[minutes,seconds];
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    clearInterval(this.currentTime);
};

// Chronometer.prototype.splitClick = function () {

// };

function concatZero(num) {
    var str = "0" + num;
    return str.slice(-2);
  }