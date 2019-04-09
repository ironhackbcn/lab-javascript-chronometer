// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = null;
  this.minutes=0;
  this.seconds=0;
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime()
    this.printTimeCallback();
    printTime()
  }, 1000); 
}
Chronometer.prototype.printTimeCallback = function() {
  return this.minutes+":" + ""+ this.seconds;
  
}

Chronometer.prototype.setMinutes = function () {
  return Number(Math.floor(this.currentTime / 60));  
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  value = String(value);
  if(Number(value) < 10) {
    return 0 + value; 
  } else {
    return value;
  }
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
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




/*=============================================
// Constructor

function Chronometer() {
  this.currentTime=0;
  this.intervalId=0;
 }

 Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval(()=>{
     this.currentTime+=1;
     this.setTime();
    },1000)
 };

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
  };

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60;
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  if(time<10){
    return "0"+time;
  }
  else{
    return ""+time;
  }
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {

 };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime =0;
};

Chronometer.prototype.splitClick = function () {

};*/
