// Constructor
class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
        this.minutes;
        this.seconds;
    }

    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            this.setTime();
        }, 1000);
    }

    setMinutes() {
        return (Math.round(parseFloat(this.currentTime / 60)));
    }

    setSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(value) {
        let newValue = "" + value;
        if (newValue.split("").length === 1) {
            console.log('recibo uno de un dígito' + '0' + newValue);
            return '0' + newValue
        } else {
            return newValue;
        }
    }

    setTime() {
        this.minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
        this.setSeconds = this.twoDigitsNumber(this.setSeconds(this.currentTime));
    }


    setMilliseconds() {

    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.setTime = 0;
    }

    splitClick() {

    }

}





let cron = new Chronometer();
cron.startClick();
console.log(cron.currentTime);
console.log(cron.intervalId);
console.log(cron.setSeconds())

cron.twoDigitsNumber(8);