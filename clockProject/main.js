

const displayTime = document.querySelector('.container')
const timer = document.querySelector('.timer')


const showTime = () => {

    let myDate = new Date()
    let hours = myDate.getHours()
    minutes = myDate.getMinutes()
    secounds = myDate.getSeconds()

    let session = 'AM'
   

    if(hours === 12){
        hours = 0
    } if(hours > 12){
        hours = hours - 12
        session = "PM"
    } if (secounds < 10){
        secounds = `0${secounds}`
    } if(minutes < 10){
        minutes = `0${minutes}`
    }

    displayTime.textContent = `${hours} : ${minutes} : ${secounds} ${session}`
    
    setTimeout(showTime, 1000);

}

showTime()

//timer 



