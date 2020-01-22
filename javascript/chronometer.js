// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.callBack = function () {
        printTime();
    }
}
Chronometer.prototype.startClick = function () {
    intervalId = setInterval (() => {
        this.currentTime++;
        this.setTime();
        this.callBack();
    }, 1000);
};
Chronometer.prototype.setMinutes = function () {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
};
Chronometer.prototype.setSeconds = function () {
    var seconds = this.currentTime % 60;
    return seconds;
};
Chronometer.prototype.twoDigitsNumber = function (num) {
        var str = "0" + num;
        return str.slice(-2);
}
Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes()); //this gives me a string and we can use index
    var seconds = this.twoDigitsNumber(this.setSeconds());
    return [minutes, seconds];
};

// Chronometer.prototype.setMilliseconds = function () {
// };

Chronometer.prototype.stopClick = function () {
    clearInterval(intervalId);

};
Chronometer.prototype.resetClick = function () { //callback is only for funcs
    this.currentTime = clearInterval(this.currentTime);
    this.currentTime = 0;

    var minDec = document.getElementById('minDec');
    var minUni = document.getElementById('minUni');
    var secDec = document.getElementById('secDec');
    var secUni = document.getElementById('secUni');

    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
};

// Chronometer.prototype.splitClick = function () {
// };