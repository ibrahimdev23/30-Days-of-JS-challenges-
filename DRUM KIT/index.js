
//saving html elements to variables 
let keyLetters = document.querySelector('li')
const keys = document.querySelectorAll('.key')




playSound = (e => {
 
    const audio = document.querySelector(`audio[ID='${e.code}']`)
    if(!audio) return 
    audio.currentTime = 0;
    audio.play()
    const key = document.querySelector(`[id="${e.code}"]`)
    key.classList.add('playing')

  
})



function removeTransition(e){
    if(e.propertyName !== 'transform') return // stops funciton if element hasn't trasnformed
    this.classList.remove('playing')
   
}



document.addEventListener('keydown', playSound)

keys.forEach((keys) => {
    keys.addEventListener('transitionend', removeTransition)
})