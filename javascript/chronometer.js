// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = '';
    this.minutes = 0;
    this.seconds = 0;
    this.currentMilliseconds = 0;
    this.milliseconds = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.setTime()
        this.currentTime++;
        printTime();
    }, 1000);
    this.scdIntervalId = setInterval(() => {
        this.setTime()
        this.currentMilliseconds++;
        printMilliseconds()
    }, 10)
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value < 10) {
        return `0${value}`;
    } else {
        return `${value}`;
    }
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());

};

Chronometer.prototype.setMilliseconds = function () {
    if (this.currentMilliseconds > 99) {
        this.currentMilliseconds = 0;
    }
    return this.currentMilliseconds;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.scdIntervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };
