let day, hour, minute, second;
const setBtn = document.querySelector("#setBtn");
const resetBtn = document.querySelector("#resetBtn");
let ttSet = new Date();
let stDay = document.getElementById("day-count");
let stHour = document.getElementById("hour-count");
let stMin = document.getElementById("minute-count");
let stSec = document.getElementById("second-count");
let setter = document.getElementsByClassName("setter");


function assign(ev){
    
    ev.preventDefault(); //This is to prevent the button from submitting and reloading the page
    
    
    day = document.getElementById("day-set").value;
    hour = document.getElementById("hour-set").value;
    minute = document.getElementById("minute-set").value;
    second = document.getElementById("second-set").value;
    

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
    if(second===undefined || second === ""){
        return;
    }else{
        let secNow = parseInt(ttSet.getMinutes() + parseInt(second));
        secNow.toString();
        ttSet.setSeconds(secNow);
    }
    


    setInterval(finalSetter, 1000);
}

function finalSetter(){
    document.getElementById("day-set").value="";
    document.getElementById("hour-set").value="";
    document.getElementById("minute-set").value="";
    document.getElementById("second-set").value="";
    
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
}
setBtn.addEventListener("click", assign);


