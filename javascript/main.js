var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');



function printTime() {
   printMinutes();
   printSeconds();
    
}

function printMinutes() {
    var minutes = chronometer.setTime()[0];
    console.log(minutes);
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
    
}

function printSeconds() {
    var seconds = chronometer.setTime()[1];
    console.log(seconds);
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick();
}

function setResetBtn() {
    chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className==="btn start"){
        btnLeft.className="btn stop";
        btnLeft.innerHTML="STOP";
        btnRight.className="btn split";
        btnRight.innerHTML="SPLIT";
        setStartBtn();
        
    }
    else if (btnLeft.className==="btn stop"){
        btnLeft.className="btn start";
        btnLeft.innerHTML="START";
        btnRight.className="btn reset";
        btnRight.innerHTML="RESET";
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className==="btn reset"){
        
    }
    else if(btnRight.className==="btn split"){
        var orderList = document.querySelector("#splits");
        var newListElement = document.createElement("li");
        var updatedTime=[...chronometer.setTime()];
        newListElement.innerHTML=`${updatedTime[0]}:${updatedTime[1]}`;
        orderList.appendChild(newListElement);
        
    }
});
