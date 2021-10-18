let day, hour, minute, second;
const setter = document.querySelector("#setBtn");
let timern = new Date();
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
    
    let dateNow = parseInt(timern.getDate()) + parseInt(day);
    dateNow.toString();
    timern.setDate(dateNow);
    timern.setHours(hour);
    timern.setMinutes(minute);
    timern.setSeconds(second);

    stDay.innerHTML = timern.getDate();
    stHour.innerHTML = timern.getHours();
    stMin.innerHTML = timern.getMinutes();
    stSec.innerHTML = timern.getSeconds();

}

setter.addEventListener("click", assign);
