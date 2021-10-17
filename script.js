let day, hour, minute, second;
const setter = document.querySelector("#setBtn");
let pSec = document.getElementById("second-count"),
pMin = document.getElementById("minute-count");
const setToTime = new Date(`1/${day}/2000`);
// setToTime.setHours(hour);
// setToTime.setMinutes(minute);
// setToTime.setSeconds(second);



function assign(ev){
    
    ev.preventDefault(); //This is to prevent the button from submitting and reloading the page
    day = document.getElementById("day-set").value;
    hour = document.getElementById("hour-set").value;
    minute = document.getElementById("minute-set").value;
    second = document.getElementById("second-set").value;
    
    setInterval(secondChange, 1000);
    setInterval(minuteChnage, 60000);
    
}


function secondChange(){     //The second timer
    if(second>=0){
        pSec.innerHTML = `${second}`
    }else{
        return;
    }
    second--;
}


function minuteChnage(){     //The Minute timer
    if(minute>=0){
        pMin.innerHTML = `${minute}`;
    }else{
        return;
    }
    minute--
}
setter.addEventListener("click", assign);

