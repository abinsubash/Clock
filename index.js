let hour = document.getElementById("Hour")
let minute = document.getElementById("Minutes")
let second = document.getElementById("Second")
let time = document.getElementById("Time")

 function init(){
    let date = new Date()
    let hourValue = date.getHours()
    let minuteValue = date.getMinutes()
    let secondValue = date.getSeconds()
    if(hourValue>12){
        time.innerHTML = "AM"
    }else{
        time.innerHTML = "PM"
    }
    hour.innerHTML = hourValue
    minute.innerHTML = minuteValue
    second.innerHTML = secondValue
    requestAnimationFrame(init)
 }
 requestAnimationFrame(init)
// console.log(hour)
// console.log(minute)
// console.log(second)
