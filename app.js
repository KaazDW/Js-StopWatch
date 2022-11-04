const timerdiv = document.getElementById('timer');
const timerpass = document.getElementById('timer-bis');
const errortxt = document.getElementById('errormsg');
var msec = 00;
var sec = 00;
var minutes = 00;
var inter;

function timerStart(){
    if(inter != undefined) clearInterval(inter);
    inter = setInterval(startFunction, 10);
    document.getElementById('start-button').style.backgroundColor = "rgb(0, 100, 100)";
    document.getElementById('pause-button').style.backgroundColor = "darkcyan";
    document.getElementById('reset-button').style.backgroundColor = "darkcyan";

}
function timerPause(){
    clearInterval(inter);
    document.getElementById('start-button').style.backgroundColor = "darkcyan";
    document.getElementById('pause-button').style.backgroundColor = "rgb(0, 100, 100)";
    document.getElementById('reset-button').style.backgroundColor = "darkcyan";
}
function timerReset(){
    clearInterval(inter);
    msec = 0;
    sec = 0;
    minutes = 0;
    timerdiv.innerHTML = "00.00.00"
    document.getElementById('start-button').style.backgroundColor = "darkcyan";
    document.getElementById('pause-button').style.backgroundColor = "darkcyan";
    document.getElementById('reset-button').style.backgroundColor = "rgb(0, 100, 100)";
}
function startFunction(){
    msec++;
    if(msec < 10) msec = "0" + msec;
    // if(sec <= 9) sec = "0" + sec;

    if(msec > 100) {
        sec++;
        msec = 0;
    }
    if(sec > 59) {
        minutes++;
        sec = 0;
    }


    timerdiv.innerHTML= minutes + "." + sec + "." + msec;
}
