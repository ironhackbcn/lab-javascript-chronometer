// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
        console.log('chrono corriendo');
    },1000);
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

//Chronometer.prototype.setMilliseconds = function () {

//};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    console.log('chrono stopped');
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
