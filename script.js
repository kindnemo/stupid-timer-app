let day, hour, minute, second;
const setter = document.querySelector("#setBtn");
let ttSet = new Date();
let stDay = document.getElementById("day-count");
let stHour = document.getElementById("hour-count");
let stMin = document.getElementById("minute-count");
let stSec = document.getElementById("second-count");



function assign(ev){
    
    ev.preventDefault(); //This is to prevent the button from submitting and reloading the page
    day = document.getElementById("day-set").value;
    hour = document.getElementById("hour-set").value;
    minute = document.getElementById("minute-set").value;
    second = document.getElementById("second-set").value;
    

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

    let secNow = parseInt(ttSet.getMinutes() + parseInt(second));
    secNow.toString();
    ttSet.setSeconds(secNow);
    setInterval(finalSetter, 1000);
}

function finalSetter(){
    // now.setSeconds(second);
    const now = new Date();          //The problem was that I had to add the current time right here so that everytime the code runs it keeps resetting the curremt time
    let toGo = ttSet.getTime() - now.getTime();


    //Idk what am I doing but this is the basic of how time is being calculated
    const sec = 1000,
    min = sec * 60,
    our = min * 60,
    dat = our * 24;

    let textDay = Math.floor(toGo / dat),
    textHour = Math.floor((toGo % dat) / our),
    textMin = Math.floor((toGo % our) / min),
    textSec = Math.floor((toGo % min) / sec);

    stDay.innerHTML = textDay;
    stHour.innerHTML = textHour;
    stMin.innerHTML = textMin;
    stSec.innerHTML = textSec;
    // console.log(textSec);
}
setter.addEventListener("click", assign);


