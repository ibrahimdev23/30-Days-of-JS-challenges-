const contianer = document.querySelector('.container')
const pauseBtn = document.querySelector('.pause')

// let timer = document.createElement('p')



// const startingMins = 10 
// let time = startingMins * 60


let time = 5
const countDown = document.querySelector('.countdown')
const startBtn = document.querySelector('.start')



//


 const updateCounter = (() => {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds
    countDown.textContent = `${minutes} : ${seconds}`
    time--
   
 })


let intervalId = setInterval(updateCounter, 1000)



const upIt = () => {
    updateCounter()
}


pauseBtn.addEventListener('click', () => {
    clearInterval(intervalId)
})




startBtn.addEventListener('click', upIt)

// let counter =1 0
// let timeleft = 10

// function minutes(s){
//     let min = Math.floor(s / 60)
//     let sec = s % 60

//     return `${min} : ${sec}`
// }


// setUp = () => {


//     contianer.appendChild(timer)
//     timer.textContent = ''

//     function timeIt(){
//         counter++
//         timer.textContent = minutes(timeleft - counter)

        
//     }

//     setInterval(timeIt, 1000)

    
// }



// clearTime()


// setUp()
