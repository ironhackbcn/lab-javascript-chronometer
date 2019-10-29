// Constructor
// function Chronometer() {
function Chronometer () {
    this.currentTime = 0;
    this.intervalId = 1000;
    
    Chronometer.prototype.startClick = function() {
        setInterval(()=>{
            this.currentTime += 1;
            this.setTime();
        }, this.intervalId);
    }
    Chronometer.prototype.setMinutes = function () {
        return Math.round(parseInt((this.currentTime/60)))
    }
    Chronometer.prototype.setSeconds = function () {
        if (this.currentTime==0){
            return 00
        } else if (this.currentTime>0 && this.currentTime<10){
            return parseInt(`0${this.currentTime}`)
        
        } else {
            return this.currentTime%60
        }
    }
    Chronometer.prototype.twoDigitsNumber = function (number) {
        console.log(number);
        if (number < 10){
            return `0${number}`;
        } else {
            return `${number}`;
        }
    }
    Chronometer.prototype.setTime = function () {
        let minutes = this.twoDigitsNumber(this.setMinutes());
        let seconds = this.twoDigitsNumber(this.setSeconds());
    }

    Chronometer.prototype.stopClick = function () {
        clearInterval(this.startClick)
    }

    Chronometer.prototype.resetClick = function () {
        this.currentTime = 0
    }
}