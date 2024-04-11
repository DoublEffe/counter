
//elements of the page
let div = document.createElement('div')
let buttonDiv = document.createElement('div')
let plus = document.createElement('button')
let plusImg = document.createElement('img')
plusImg.setAttribute('src', 'assets/img/plus.svg')
plus.appendChild(plusImg)
let subtract = document.createElement('button')
let minusImg = document.createElement('img')
minusImg.setAttribute('src', 'assets/img/minus.svg')
subtract.appendChild(minusImg)
let text = document.createElement('p')
text.innerText = 'Counter is at: '
let counterText = document.createElement('span')
document.body.appendChild(div)
div.appendChild(buttonDiv)
buttonDiv.appendChild(plus)
buttonDiv.appendChild(subtract)
div.appendChild(text)
text.appendChild(counterText)



export  {div, buttonDiv, plus, subtract, text, counterText}