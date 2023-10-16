 const hourE1=document.getElementById("hour")
 const minutesE1=document.getElementById("minutes")
 const secondsE1=document.getElementById("seconds")
 const ampmE1=document.getElementById("ampm")

//  Creating a Function to Get the data from our Computer 
function updateClock()
{
    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    

    if(h>12)
    {
        h=h-12
        ampm="PM"
    }
    else
    {
        ampm="AM"
    }
// We are using this to add '0' in Hour section of clock when time is less than 10
    h=h<10?"0"+h:h;
    // if h is less than 10 then use 0+h
    // else use h
// Similarly for Minutes and Seconds
    m=m<10?"0"+m:m;
    // if m is less than 10 then use 0+m
    // else use m
    s=s<10?"0"+s:s;
    // if s is less than 10 then use 0+s
    // else use s
    // Using inner takes method to change the text inside hour element, so
    hourE1.innerText=h;
    minutesE1.innerText=m;
    secondsE1.innerText=s;
    ampm, (innerText=ampm);
    setTimeout(()=>{
        updateClock();
    }, 1000);
}
updateClock();