class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = undefined;
    this.running = false;
    this.digits = {
      decMin: undefined,
      uniMin: undefined,
      decSec: undefined,
      uniSec: undefined
    };
  }

  startClick() {
    this.running = true;
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this._refreshTime();
    }, 1000);
  }

  _refreshTime() {
    this.setTime();
    this.digits.decMin.innerText = this.minutes.split("")[0];
    this.digits.uniMin.innerText = this.minutes.split("")[1];
    this.digits.decSec.innerText = this.seconds.split("")[0];
    this.digits.uniSec.innerText = this.seconds.split("")[1];
  }

  setMinutes() {
    return parseInt(this.currentTime / 60);
  }
  setSeconds() {
    return this.currentTime - this.setMinutes() * 60;
  }
  twoDigitsNumber(number) {
    return ("0" + number).slice(-2);
  }
  setTime() {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.running = false;
  }
  resetClick() {
    this.currentTime = 0;
    this._refreshTime();
  }
}
