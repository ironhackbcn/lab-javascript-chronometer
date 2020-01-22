//Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
        printTime();
    }, 1000);
}
Chronometer.prototype.setMinutes = function () {
    return (Math.floor(this.currentTime / 60));
}
Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
}
Chronometer.prototype.twoDigitsNumber = function (number) {
    zeroConcat = "0" + number;
    return zeroConcat.slice(-2);
}
Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime))
    this.seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime))
}

Chronometer.prototype.setMilliseconds = function () {
}
Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
}
Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secUni.innerHTML = 0;
    secDec.innerHTML = 0;
    const orderedList = document.querySelector('#splits');
    orderedList.innerHTML = ""
}

Chronometer.prototype.splitClick = function () {
    const orderedList = document.querySelector('#splits')
    orderedList.innerHTML += `<li> ${this.minutes}:${this.seconds} </li>`
}
