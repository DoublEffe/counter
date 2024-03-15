
//elements of the page
let div = document.createElement('div')
let buttonDiv = document.createElement('div')
let plus = document.createElement('button')
plus.textContent = 'ADD 1'
let subtract = document.createElement('button')
subtract.textContent = 'SUB 1'
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