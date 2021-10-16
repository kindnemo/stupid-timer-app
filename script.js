let day, hour, minute, second;
const setter = document.querySelector("#setBtn");

function assign(ev){
    
    ev.preventDefault(); //This is to prevent the button from submitting and reloading the page
    day = document.getElementById("day-set").value;
    hour = document.getElementById("hour-set").value;
    minute = document.getElementById("minute-set").value;
    second = document.getElementById("second-set").value;
}

setter.addEventListener("click", assign);