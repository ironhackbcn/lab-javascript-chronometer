let btnStart = document.querySelector("#btnLeft");
let btnReset = document.querySelector("#btnRight");
let minDecenas = document.querySelector("#minDec");
let minUnidades = document.querySelector("#minUni");
let secDecenas = document.querySelector("#secDec");
let secUnidades = document.querySelector("#secUni");
let milDecenas = document.querySelector("#milDec");
let milUnidades = document.querySelector("#milUni");
let splitList = document.querySelector("#splits")

// Constructor
// function Chronometer() {
function Chronometer () {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    this.intervalId = 1000;
    this.state = "stopped"
    
    Chronometer.prototype.startClick = function() {
        if(this.state=="stopped"){
            this.state = "running"
        } else if(this.state=="running"){
            this.state = "stopped"
            this.stopClick()
        }
        refreshIntervalId = setInterval(()=>{
            this.currentTime += 1;
            this.setTime();
        }, this.intervalId);
        refreshIntervalIdMillisec = setInterval(()=>{
            if(this.currentMilliseconds==99){
                this.currentMilliseconds=0
            }
            this.currentMilliseconds += 1
            this.setMilliseconds();
        }, 10)
    }
    Chronometer.prototype.setMinutes = function () {
        return Math.round(parseInt((this.currentTime/60)))
    }
    Chronometer.prototype.setSeconds = function () {
        if (this.currentTime%60==0){
            return 00
        } else if (this.currentTime%60>0 && this.currentTime%60<10){
            return parseInt(`0${this.currentTime%60}`)
        } else {
            return this.currentTime%60
        }
    }
    Chronometer.prototype.twoDigitsNumber = function (number) {
        if (number < 10){
            return `0${number}`;
        } else {
            return `${number}`;
        }
    }
    Chronometer.prototype.setTime = function () {
        let minutes = this.twoDigitsNumber(this.setMinutes());
        let seconds = this.twoDigitsNumber(this.setSeconds());
        minDecenas.innerHTML = minutes[0];
        minUnidades.innerHTML = minutes[1];
        secDecenas.innerHTML = seconds[0];
        secUnidades.innerHTML = seconds[1];
    }

    Chronometer.prototype.setMilliseconds = function(){
        let milliseconds = this.twoDigitsNumber(this.currentMilliseconds);
        console.log(this.twoDigitsNumber(this.currentMilliseconds))
        milDecenas.innerHTML = milliseconds[0]
        milUnidades.innerHTML = milliseconds[1]
    }

    Chronometer.prototype.stopClick = function () {
        clearInterval(refreshIntervalId)
        clearInterval(refreshIntervalIdMillisec)
        this.state = "stopped"
    }

    Chronometer.prototype.resetClick = function () {
        this.currentTime = 0;
        minDecenas.innerHTML = 0;
        minUnidades.innerHTML = 0;
        secDecenas.innerHTML = 0;
        secUnidades.innerHTML = 0;
        splitList.innerHTML = ""
    }
}

let Chronometer1 = new Chronometer();


btnStart.addEventListener("click", (e)=>{
    if(Chronometer1.state == "stopped"){
        Chronometer1.startClick()
        e.currentTarget.innerHTML = "STOP";
        btnReset.innerHTML = "SPLIT";
        btnReset.classList.remove("reset");
        btnReset.classList.add("split");
    } else {
        Chronometer1.stopClick();
        e.currentTarget.innerHTML = "START";
        btnReset.innerHTML = "RESET";
        btnReset.classList.remove("split");
        btnReset.classList.add("reset");
    }
})
btnReset.addEventListener("click", ()=>{
    if(btnReset.className.includes("reset")){
        Chronometer1.resetClick()
    } else if(btnReset.className.includes("split")){
        let newSplitTime = document.createElement("li");
        newSplitTime.innerHTML = `${minDecenas.innerHTML}${minUnidades.innerHTML}:${secDecenas.innerHTML}${secUnidades.innerHTML}:${milDecenas.innerHTML}${milUnidades.innerHTML}`
        splitList.appendChild(newSplitTime)
    }
})