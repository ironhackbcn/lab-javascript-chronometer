// Constructor
 function Chronometer() {
    this.currentTime = 0;
    this.intervalId = '';
    this.milliseconds = 0;
 }

Chronometer.prototype.startClick = function () {
    var test = this;
    this.intervalId = setInterval(function() {
        test.currentTime += 1;
        test.setTime();
    }, 1000)
    this.millisecondsInterval = setInterval(function () {
        if(this.milliseconds === 99) {
            this.milliseconds = 0;
        }
        test.setMilliseconds()
        test.milliseconds++;
    },10)
 };

Chronometer.prototype.setMinutes = function () {
    if(this.currentTime === 0) {
        return 0;
    }
    return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    if(this.currentTime === 0) {
        return 0;
    }
    let deez = Math.floor(this.currentTime/60);
    return (this.currentTime - deez * 60);
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    return('0' + value).slice(-2);
    } 

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    printTime(this.minutes,this.seconds);
};

Chronometer.prototype.setMilliseconds = function () {
    this.millit = this.twoDigitsNumber(this.milliseconds);
    printMilliseconds(this.millit)
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsInterval);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
    this.milliseconds = 0;
    this.setMilliseconds();
};

Chronometer.prototype.splitClick = function () {
    let minutevar = this.twoDigitsNumber(this.setMinutes());
    let secondvar = this.twoDigitsNumber(this.setSeconds());
    let milvar = this.twoDigitsNumber(this.milliseconds)
    printSplit(minutevar,secondvar,milvar)
};
