function createElement(elem, arrayClassName, toAppend) {
  let el = document.createElement(elem)
  if(elem === 'img'){
    el.setAttribute('src', arrayClassName)
  }
  else {
    el.classList.add(...arrayClassName)
  }
  toAppend.appendChild(el)
  return el
}


//wrapper div
let body = document.getElementsByTagName('body')[0]
let div = createElement('div', ['outside'], body)


//vital bars
//left bar
let barL = createElement('div', ['bar', 'barLeft'], div)

//right bar
let barR = createElement('div', ['bar', 'barRight'], div)


//wrapper button div
let buttonDiv = createElement('div', ['buttonDiv'], div)


//buttons
//button plus
let plus = createElement('button', ['button'], buttonDiv)
let imgPlus = createElement('img', 'assets/img/plus.svg', plus)
plus.setAttribute('id', 'plus')
//button minus
let minus = createElement('button', ['button'], buttonDiv)
let imgMinus = createElement('img', 'assets/img/minus.svg', minus)
minus.setAttribute('id', 'minus')



//text
let text = createElement('p', ['text'], div)
text.innerText = 'Counter is at: '
let counterText = createElement('span', [], text)



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