let [hours,minutes,seconds,mili_seconds]=[0,0,0,0]
let timer=null
let timeDisplay=document.querySelector('.display');

document.getElementById('start-timer').addEventListener('click',()=>{
    if(timer!==null)
    {
        clearInterval(timer);
    }
    timer=setInterval(display,10);
});

document.getElementById('pause-timer').addEventListener('click',()=>{
    clearInterval(timer)
});

document.getElementById('reset-timer').addEventListener('click',()=>{
    clearInterval(timer);
    [hours,minutes,seconds,mili_seconds]=[0,0,0,0];
    timeDisplay.innerHTML='00 : 00 : 00 : 000';
});

function display(){
    mili_seconds++;
    if(mili_seconds==1000){
        seconds++;
        mili_seconds=0;
    }
    if(seconds==60){
        minutes++;
        seconds=0;
    }
    if(minutes==60){
        hours++;
        minutes=0;
    }

    let mili_secondsStr=(mili_seconds<10)?('00'+mili_seconds):(mili_seconds<100)?('0'+mili_seconds):mili_seconds;
    let secondsStr=(seconds<10)?('0'+seconds):seconds;
    let minStr=(minutes<10)?('0'+minutes):minutes;
    let hourStr=(hours<10)?('0'+hours):hours;

    timeDisplay.innerHTML=`${hourStr} :  ${minStr} : ${secondsStr} : ${mili_secondsStr}`;

}