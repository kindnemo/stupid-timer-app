let day, hour, minute, second;
const setter = document.querySelector("#setBtn");
let ttSet = new Date();
let stDay = document.getElementById("day-count");
let stHour = document.getElementById("hour-count");
let stMin = document.getElementById("minute-count");
let stSec = document.getElementById("second-count");
const now = new Date();


function assign(ev){
    
    ev.preventDefault(); //This is to prevent the button from submitting and reloading the page
    day = document.getElementById("day-set").value;
    hour = document.getElementById("hour-set").value;
    minute = document.getElementById("minute-set").value;
    second = document.getElementById("second-set").value;
    
    let dateNow = parseInt(ttSet.getDate()) + parseInt(day);
    dateNow.toString();
    ttSet.setDate(dateNow);

    let hourNow = parseInt(ttSet.getHours()) + parseInt(hour);
    hourNow.toString();
    ttSet.setHours(hourNow);

    let minNow = parseInt(ttSet.getMinutes() + parseInt(minute));
    minNow.toString();
    ttSet.setMinutes(minNow);

    let secNow = parseInt(ttSet.getMinutes() + parseInt(second));
    secNow.toString();
    ttSet.setSeconds(secNow);
    finalSetter();
}

function finalSetter(){
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


