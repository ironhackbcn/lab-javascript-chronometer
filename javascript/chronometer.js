function Chronometer() {
    this.currentTime = 0;
    this.intervalId = "";
    this.callback = function(){
        printTime()
    }
}
Chronometer.prototype.startClick = function () {
var that = this;
console.log('inside');
    this.intervalId = setInterval(function () {
        that.currentTime++;
        that.setTime();
        that.callback()
    }, 1000);
};
Chronometer.prototype.setMinutes = function () {
    var timeMin = (this.currentTime/60);
    var fixedTimeMinNumber = Math.floor(Number(timeMin));
    return fixedTimeMinNumber;

};

Chronometer.prototype.setSeconds = function () {
    return (this.currentTime%60);
};

Chronometer.prototype.twoDigitsNumber = function (num) {

var str = "0" + num
var resutl = str.slice(-2);
return resutl;

};
Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    console.log([this.minutes,this.seconds]);
    return[this.minutes, this.seconds]
};
//Chronometer.prototype.setMilliseconds = function () {
   
// };
Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};
Chronometer.prototype.resetClick = function () {
this.currentTime = 0;
minDec.innerHTML = 0;
minUni.innerHTML = 0;
secUni.innerHTML = 0;
secDec.innerHTML = 0;
const orderedList = document.querySelector('#splits')
orderedList.innerHTML = "";
};

Chronometer.prototype.splitClick = function () {
   const orderedList = document.querySelector('#splits');
   orderedList.innerHTML += `<li> ${this.minutes} : ${this.seconds} </li>`
};