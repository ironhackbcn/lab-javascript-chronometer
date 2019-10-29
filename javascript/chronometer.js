// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds =0;
    this.intervalMillisecs = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
    },1000);
        this.setMilliseconds();
};

Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime -this.setMinutes()*60;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    return ('0' + num).slice(-2);
};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {
    this.intervalMillisecs = setInterval((()=> {
        this.milliseconds++;
        if (this.milliseconds >99) {
            this.milliseconds = 0;
        }
    }),0);
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMillisecs);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.milliseconds = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
