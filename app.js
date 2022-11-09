// variable initialization
const timerdiv = document.getElementById('timer');
const timerpass = document.getElementById('timer-bis');
const errortxt = document.getElementById('errormsg');
var msec = 00;
var sec = 00;
var minutes = 00;
var inter;


//function definition
function timerStart(){
    if(inter != undefined) clearInterval(inter);
    inter = setInterval(startFunction, 10);
    errortxt.innerHTML = "running...";

    //style interface param
    document.getElementById('start-button').style.backgroundColor = "var(--yellow-bis)";
    document.getElementById('pause-button').style.backgroundColor = "var(--yellow)";
    document.getElementById('reset-button').style.backgroundColor = "var(--yellow)";
}
function timerPause(){
    clearInterval(inter);
    errortxt.innerHTML = "pause";

    //style interface param
    document.getElementById('start-button').style.backgroundColor = "var(--yellow)";
    document.getElementById('pause-button').style.backgroundColor = "var(--yellow-bis)";
    document.getElementById('reset-button').style.backgroundColor = "var(--yellow)";
}
function timerReset(){
    clearInterval(inter);
    msec = 0;
    sec = 0;
    minutes = 0;
    timerdiv.innerHTML = "00.00.00"
    errortxt.innerHTML = "reset";


    //style interface param
    document.getElementById('start-button').style.backgroundColor = "var(--yellow)";
    document.getElementById('pause-button').style.backgroundColor = "var(--yellow)";
    document.getElementById('reset-button').style.backgroundColor = "var(--yellow-bis)";
}

function startFunction(){
    msec++;
    if(msec > 100) {
        sec++;
        msec = 0;
    }
    if(sec > 59) {
        minutes++;
        sec = 0;
    }
    display(msec, sec, minutes);
}

function display(msec, sec, minutes){
    //convert int into string for display it with 2 char each
    let string_msec = msec.toString();
    let string_sec = sec.toString();
    let string_minute = minutes.toString();
    //so if one value have only one figure, add a 0 before
    if (string_msec <= 9) string_msec = "0" + string_msec;
    if (string_sec <= 9) string_sec = "0" + string_sec;
    if (string_minute <= 9) string_minute = "0" + string_minute;

    //and then display it in the format you want
    timerdiv.innerHTML = string_minute + "." + string_sec + "." + string_msec;

}