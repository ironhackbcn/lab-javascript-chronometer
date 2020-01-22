var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var orderedList = document.querySelector('#splits');


function printTime() {
    printSeconds();
    printMinutes();
}

function printMinutes() {
    var minutes = chronometer.setTime()[0];
    //do we call the vars with the funcs inside from setTime? - yes
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds() {
    var seconds = chronometer.setTime()[1];
    secDec.innerHTML = seconds[0]; 
    secUni.innerHTML = seconds[1];
    // same as up
  
}

function printMilliseconds() {
    //uhhhhh no
}

function printSplit() {
    //is the ordered list added from the function itself or do we add it from the skeleton a set number? -yes
}

function clearSplits() {
    //for this do we use stopTime? - yes
}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
        printTime();
}

function setResetBtn() {
    chronometer.resetClick();
    orderedList.remove
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    //how do we make it recognize that the chron is working or stopped?

    if (btnLeft.className === "btn start") {
        setStartBtn();
        btnLeft.className = "btn stop";
        btnLeft.innerHTML = "STOP";
        

        btnRight.innerHTML = "SPLIT"
        btnRight.className = "btn split";

        chronometer.startClick();
    } else if (btnLeft.className === "btn stop"){
        setStopBtn();
        btnLeft.innerHTML = "START";
        btnLeft.className = "btn start";

        btnRight.innerHTML = "RESET";
        btnRight.className = "btn reset";
    }
    }
);



// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === 'btn reset') {
        setResetBtn();
        var splitsEl = document.getElementById('splits');
        while (splitsEl) {
            splitsEl.removeChild(splitsEl.firstChild);
        };
    


    } else if (btnRight.className === 'btn split') {
        var newItem = document.createElement('li');
        var updatedTime = [...chronometer.setTime()];
        newItem.className = "splitElement";
        newItem.innerHTML = `${updatedTime[0]}:${updatedTime[1]}`;
        orderedList.appendChild(newItem);

        
    }

    //if the instructions say the leftbutton and we put the btnright iterations there, we don't separate them right? bc the event is from the left button 
});
