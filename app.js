const timerdiv = document.getElementById('timer');
const errortxt = document.getElementById('errormsg');
var msec = 00;
var sec = 50;
var minutes = 00;
var isStart = false;
var inter;

function timerStart(){
    if(inter != undefined) clearInterval(inter);
    inter = setInterval(startFunction, 10);
    isStart = true;
}
function timerPause(){
    clearInterval(inter);
}
function timerReset(){
    timerPause();
    msec = 0;
    sec = 0;
    minutes = 0;
    timerdiv.innerHTML = "00.00.00"
}
function startFunction(){
    msec++;
    if(msec < 10) msec = "0" + msec;
    if(msec > 100) {
        sec++;
        msec = 0;
    }
    if(sec > 59) {
        minutes++;
        sec = 0;
    }
    if(minutes <= 9) timerdiv.innerHTML= "0" + minutes + "." + sec + "." + msec;


    timerdiv.innerHTML= minutes + "." + sec + "." + msec;
}

if(isStart){
    document.getElementById('start-button').disabled = true;
}else{document.getElementById('start-button').disabled = false;}