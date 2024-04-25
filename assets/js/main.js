function createElement(elem) {
  return document.createElement(elem)
}


//wrapper div
let div = createElement('div')
document.body.appendChild(div)
div.setAttribute('class', 'outside')


//vital bars
//left bar
let barL = createElement('div')
barL.classList.add('bar', 'barLeft')
div.appendChild(barL)
//right bar
let barR = createElement('div')
barR.classList.add('bar', 'barRight')
div.appendChild(barR)



//wrapper button div
let buttonDiv = createElement('div')
buttonDiv.setAttribute('class', 'buttonDiv')
div.appendChild(buttonDiv)

//buttons
//button plus
let plus = createElement('button')
let imgPlus = createElement('img')
imgPlus.setAttribute('src', 'assets/img/plus.svg')
plus.appendChild(imgPlus)
plus.setAttribute('id', 'plus')
plus.setAttribute('class', 'button')
buttonDiv.appendChild(plus)
//button minus
let minus = createElement('button')
let imgMinus = createElement('img')
imgMinus.setAttribute('src', 'assets/img/minus.svg')
minus.appendChild(imgMinus)
minus.setAttribute('id', 'minus')
minus.setAttribute('class', 'button')
buttonDiv.appendChild(minus)


//text
let text = createElement('p')
text.style.fontSize = '2rem'
text.innerText = 'Counter is at: '
div.appendChild(text)
let counterText = createElement('span')
text.appendChild(counterText)



//logic of the page
let count = (counter) => {
  localStorage.setItem('counter', counter)
  counterText.innerText = localStorage.getItem('counter')
}
let counter 
let vitalL = 0
let vitalR = 0
document.addEventListener('DOMContentLoaded',() =>{
  if(localStorage.getItem('counter')){
    counter = localStorage.getItem('counter')
  }
  else{
    counter = 0
  }
  count(counter)
  buttonDiv.addEventListener('click', (event) => {
    if(event.target.getAttribute('id') === 'plus' || event.target.getAttribute('src') === 'assets/img/plus.svg'){
      counter++
      vitalR += 25
      barR.style.background = `linear-gradient(to right, black ${String(vitalR)}%, #ec6912)`
      count(counter)  
      if(vitalR == 100){
        barR.style.backgroundColor = '#ec6912'
        vitalR = 0
        window.alert('Right Champion Lost')
      }
    }
    else{
      counter--
      vitalL += 25
      barL.style.background = `linear-gradient(to left, black ${String(vitalL)}%, #ec6912)`
      count(counter)
      if(vitalL == 100){
        barL.style.backgroundColor = '#ec6912'
        vitalL = 0
        window.alert('Left Champion Lost')
      }
    }
  })
})