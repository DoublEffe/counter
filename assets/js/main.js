function create(elem) {
  return document.createElement(elem)
}

function createButton(img) {
  let button = create('button')
  let imgs = create('img')
  button.style.height = '80px'
  button.style.width = '100px'
  button.style.borderRadius = '5px'
  imgs.setAttribute('src', img)
  button.appendChild(imgs)
  buttonDiv.appendChild(button)
  return button
}

function createBars() {
  let bar = create('div')
  bar.style.width = '35%'
  bar.style.height = '5%'
  bar.style.backgroundColor = '#ec6912'
  bar.style.border = '5px solid yellow'
  div.appendChild(bar)
  return bar
}

document.body.style.height = '100vh'
document.body.style.width = '100vw'
document.body.style.background= 'url(assets/img/tekken.jpg)'
document.body.style.backgroundSize = 'cover'
document.body.style.overflow = 'hidden'



//wrapper div
let div = create('div')
document.body.appendChild(div)
div.style.height = '100%'
div.style.display = 'flex'
div.style.flexDirection = 'column'
div.style.justifyContent = 'center'
div.style.alignItems = 'center'

//vital bars
//left bar
let barL = createBars()
barL.style.transform = 'skew(40deg)'
barL.style.position = 'absolute'
barL.style.top = '45px'
barL.style.left = '10%'
//right bar
let barR = createBars()
barR.style.transform = 'skew(-40deg)'
barR.style.position = 'absolute'
barR.style.top = '45px'
barR.style.left = '55%'

//wrapper button div
let buttonDiv = create('div')
buttonDiv.style.width = '25%'
buttonDiv.style.display = 'flex'
buttonDiv.style.justifyContent = 'space-between'
div.appendChild(buttonDiv)

//buttons
//button plus
let plus = createButton('assets/img/plus.svg')
plus.setAttribute('id', 'plus')
//button minus
let minus = createButton('assets/img/minus.svg')
minus.setAttribute('id', 'minus')


//text
let text = create('p')
text.style.fontSize = '2rem'
text.innerText = 'Counter is at: '
div.appendChild(text)
let counterText = create('span')
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
        window.alert('Right Champion Lost')
      }
    }
    else{
      counter--
      vitalL += 25
      barL.style.background = `linear-gradient(to left, black ${String(vitalL)}%, #ec6912)`
      count(counter)
      if(vitalL == 100){
        window.alert('Left Champion Lost')
      }
    }
  })
})