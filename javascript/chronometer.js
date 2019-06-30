// Constructor
class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            this.setTime();
        }, 1000);
    }

    setMinutes() {
        if (this.currentTime >= 60) {
            return (Math.round(parseFloat(this.currentTime / 60)));
        } else {
            return 0;
        }
    }

    setSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(value) {
        if (value < 10) {
            return "0" + value;
        } else {
            return "" + value;
        }
    }

    setTime() {
        this.minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
        this.seconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
    }

    setMilliseconds() {

    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {

    }

}
