// Constructor

class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
      this.setTime();
      printTime();
    }, 1000);
  };

  setMinutes() {
    if (this.currentTime <= 60) {
      return 0
    } else {
      return Math.floor(this.currentTime / 60)
    }
  };

  setSeconds() {
    if (this.currentTime < 61) {
      return this.currentTime;
    } else {
      return this.currentTime % 60;
    }

  };

  twoDigitsNumber(number) {
    if (number < 10) {
      return '0' + number.toString()
    } else {
      return number.toString()
    }
  };

  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes())
    var seconds = this.twoDigitsNumber(this.setSeconds())
    return ([minutes, seconds])
  };

  setMilliseconds() {

  };

  stopClick() {
    clearInterval(this.intervalId);

  };

  resetClick() {
    this.currentTime = 0;
    this.setTime();
  };

  splitClick() {

  };


};