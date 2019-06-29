class Chronometer {
  constructor() {
    this.intervalId = 0;
    this.currentTime = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(tiempo) {
    let tiempoEnString = tiempo.toString();
    if (tiempoEnString.length === 1) {
      return "0" + tiempoEnString;
    }
    return tiempoEnString;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}
