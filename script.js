let [hours,minutes,seconds,mili_seconds]=[0,0,0,0]
let timer1=null
let timer2=null
let isRunning=false
let timeDisplay=document.querySelector('.display');

document.getElementById('start-timer').addEventListener('click',()=>{
    if(timer1!==null)
    {
        cancelAnimationFrame(timer1);
    }
    isRunning=true;
    timer1=requestAnimationFrame(display);
});

document.getElementById('pause-timer').addEventListener('click',()=>{
    cancelAnimationFrame(timer1)
    isRunning=false;
});

document.getElementById('reset-timer').addEventListener('click',()=>{
    cancelAnimationFrame(timer1);
    isRunning=false;
    [hours,minutes,seconds,mili_seconds]=[0,0,0,0];
    timeDisplay.innerHTML='00 : 00 : 00 : 000';
});

function display(){

    if(!isRunning) return;

    if(timer2!==null)
    cancelAnimationFrame(timer2)

    mili_seconds+=10;
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

    timer2=requestAnimationFrame(display)

}