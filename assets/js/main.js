import {div,buttonDiv, plus, subtract,text, counterText} from './style.js'

//logic of the page
let count = (counter) => {
  localStorage.setItem('counter', counter)
  counterText.innerText = localStorage.getItem('counter')
}

document.addEventListener('DOMContentLoaded',() =>{
  let counter 
  if(localStorage.getItem('counter')){
    counter = localStorage.getItem('counter')
  }
  count(counter)
  plus.addEventListener('click', () => {
    counter++
    count(counter)   
  })
  subtract.addEventListener('click', () => {
    counter--
    count(counter)
  })
})