// Constructor
    function Chronometer( ) { 
        
        this.currentTime = 0;
        this.intervalId = '';
        
        
};

// STARTCLICK

Chronometer.prototype.startClick = function () {
   
    let theTime = this;
   

    this.intervalId = setInterval(function ()  {
        theTime.currentTime += 1;
        theTime.setTime();

    }, 1000);
    
    console.log(theTime);
    

    
};

// SETMINUTES

Chronometer.prototype.setMinutes = function ( minutes ) {


 };

// SETSECONDS

 Chronometer.prototype.setSeconds = function ( seconds ) {
    const second = 1000;
    this.seconds = seconds;


};

// Chronometer.prototype.twoDigitsNumber = function () {

// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

/* }; */