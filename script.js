let day, hour, minute, second;

const setBtn = document.querySelector("#setBtn");
const resetBtn = document.querySelector("#resetBtn");
const pauseBtn = document.querySelector("#pauseBtn"); //pauseBtn

let ttSet = new Date();
let pauseTime;
let resumeBtn;
let resume;

let stDay = document.getElementById("day-count");
let stHour = document.getElementById("hour-count");
let stMin = document.getElementById("minute-count");
let stSec = document.getElementById("second-count");
let setter = document.getElementsByClassName("setter");

let interval = false;





function assign(ev){

    ev.preventDefault(); //This is to prevent the button from submitting and reloading the page
    
    
    ttSet = new Date(); //To reset the timer date and time everytime the user sets a new timer while the old timer is running

    
    day = document.getElementById("day-set").value;
    hour = document.getElementById("hour-set").value;
    minute = document.getElementById("minute-set").value;
    second = document.getElementById("second-set").value;
    
    
    if((day===""&&hour=="")&&(minute===""&&second==="")){ //If the user tries to set and empty timer it'll just not work
        return;
    }


    // Parsing adn setting the users input date and time to countdown to
    if(day === undefined || day === ""){
        // ttSet = new Date();
    }else{
        let dateNow = parseInt(ttSet.getDate()) + parseInt(day);
        dateNow.toString();
        ttSet.setDate(dateNow);
    }
    
    if(hour === undefined || hour === ""){

    }else{
        let hourNow = parseInt(ttSet.getHours()) + parseInt(hour);
        hourNow.toString();
        ttSet.setHours(hourNow);
    }

    if( minute === undefined || minute === ""){
    
    }else{
        let minNow = parseInt(ttSet.getMinutes() + parseInt(minute));
        minNow.toString();
        ttSet.setMinutes(minNow);
    }

    if(second === ""){
        ttSet.setSeconds(59);
    }else{
        let secNow = parseInt(ttSet.getMinutes() + parseInt(second));
        secNow.toString();
        ttSet.setSeconds(secNow);
    }





    document.getElementById("day-set").value="";
    document.getElementById("hour-set").value="";
    document.getElementById("minute-set").value="";
    document.getElementById("second-set").value="";
    
    interval = setInterval(finalSetter, 1000)


}

function finalSetter(){
    
    
    const now = new Date();          //The problem was that I had to add the current time right here so that everytime the code runs it keeps resetting the curremt time
    

    //Idk what am I doing but this is the basic of how time is being calculated
    let toGo = ttSet.getTime() - now.getTime();
    const sec = 1000,
    min = sec * 60,
    our = min * 60,
    dat = our * 24;

    let textDay = Math.floor(toGo / dat),
    textHour = Math.floor((toGo % dat) / our),
    textMin = Math.floor((toGo % our) / min),
    textSec = Math.floor((toGo % min) / sec);
    
    if((textSec <=0 && textMin<=0)&&(textDay <=0 && textHour <= 0 )){  //Stops the timer when it reaches 0
        clearInterval(interval);
    }
    
    
    
    // day Update
    if(textDay<=9){
        stDay.innerHTML = "0"+textDay;
    }else{
        stDay.innerHTML = textDay;
    }
    
    //hour update
    if(textHour<=9){
        stHour.innerHTML = "0"+textHour;
    }else{
        stHour.innerHTML = textHour;
    }

    //minute update
    if(textMin<=9){
        stMin.innerHTML = "0"+textMin;
    }else{
        stMin.innerHTML = textMin;
    }
    
    //second update
    if(textSec<=9){
        stSec.innerHTML = "0" + textSec;
    }else{
        stSec.innerHTML = textSec;
    }

    

    // When the timer ends the function must stop running
    
}

function pauseFunc(eve){
    eve.preventDefault();
    if(resume == true){
        pauseBtn.innerHTML = "Pause";
        resume = false;
    }
    clearInterval(interval);
    pauseBtn.innerHTML = "Resume";
    resume = true;
}

// function resumeFunc(eve){
//     eve.preventDefault();
//     resumeBtn.innerHTML = "Pause";
//     resumeBtn.id = "pauseBtn";
//     resumeBtn.classList.remove("resumeBtn");

// }

setBtn.addEventListener("click", assign);
pauseBtn.addEventListener("click",pauseFunc);

