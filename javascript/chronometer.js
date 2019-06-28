class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  // Chronometer() {}

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.setTime();
    }, 1000);
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number.toString();
    }
  }

  setTime(minutes, seconds) {
    minutes = this.setMinutes();
    seconds = this.setSeconds();

    return this.twoDigitsNumber(minutes) + this.twoDigitsNumber(seconds);
  }

  // Chronometer.prototype.setMilliseconds = function () {

  // };

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    return (this.currentTime = 0);
  }

  // Chronometer.prototype.splitClick = function () {

  // };
}
