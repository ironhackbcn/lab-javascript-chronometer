//Chronometer Status	Button ID	Text	
// Stopped	            btnLeft	    START
// Stopped	            btnRight	RESET
// Running	            btnLeft	    STOP
// Running	            btnRight	SPLIT 

//When the left button is clicked while the chronometer is stopped we need to:
// Set the btnLeft button with the text STOP, and the class btn stop.
// Set the btnRight button with the text SPLIT, and the class btn split.

// When the left button is clicked while the chronometer is running we need to:
// Set the btnLeft button with the text START, and the class btn start.
// Set the btnRight button with the text RESET, and the class btn reset.

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


// Each second we need to update our screen. So go ahead 
// and create a function that will receive the value for minutes
// and seconds, and print that on our HTML.
// Use our Chronometer methods to get the values.

function printTime(minutes, seconds) {
    printMinutes(minutes);
    printSeconds(seconds);
    //printMilliseconds(milliseconds);
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

// function printMilliseconds(milliseconds) {
//     milDec.innerHTML = milliseconds[0];
//     milUni.innerHTML = milliseconds[1];
// }


function printSplit() {
    var splitList = document.querySelector("#splits");
    var newSplit = `${minDec.innerHTML} ${minUni.innerHTML} : ${secDec.innerHTML} ${secUni.innerHTML}`;
    var li = document.createElement('li');
    li.innerHTML = newSplit;
    splitList.appendChild(li);
}

function clearSplits() {
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    var splitList = document.querySelector("#splits");
    splitList.innerHTML = '';
}

function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
}

function setSplitBtn() {
   btnRight.innerHTML = "SPLIT";
   btnRight.className = "btn split";
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START"){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
    } else if (btnLeft.innerHTML === "STOP"){
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML === "RESET"){
       clearSplits();
    } else if (btnRight.innerHTML === "SPLIT"){
        printSplit();
    }
});
