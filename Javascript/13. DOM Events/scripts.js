// Three ways to add events:
// 1. HTML-attribute : directly in the HTML element
// 2. DOM property : using a DOM property <element>.on<event>. For example : elem.onclick
//    => As there’s only one onclick property, we can’t assign more than one event handler.
// 3. addEventListener: to add multiple event handlers
let ftPlus = document.getElementById('ft-plus')

ftPlus.onclick = () => {
  let text = document.getElementById('text')
  text.style.fontSize = `${
    +window.getComputedStyle(text).fontSize.slice(0, -2) + 5
  }px`
}

let ftMinus = document.getElementById('ft-minus')

ftMinus.onclick = () => {
  let text = document.getElementById('text')
  text.style.fontSize = `${
    +window.getComputedStyle(text).fontSize.slice(0, -2) - 5
  }px`
}

let hzPlus = document.getElementById('hz-plus')

hzPlus.addEventListener('click', () => {
  let text = document.getElementById('text')
  text.style.marginLeft = `${
    +window.getComputedStyle(text).marginLeft.slice(0, -2) + 5
  }px`
  text.style.marginRight = `${
    +window.getComputedStyle(text).marginRight.slice(0, -2) + 5
  }px`
})

let hzMinus = document.getElementById('hz-minus')

function hzMinusFN(e) {
  let text = document.getElementById('text')
  text.style.marginLeft = `${
    +window.getComputedStyle(text).marginLeft.slice(0, -2) - 5
  }px`
  text.style.marginRight = `${
    +window.getComputedStyle(text).marginRight.slice(0, -2) - 5
  }px`
}

hzMinus.addEventListener('click', hzMinusFN)
// hzMinus.addEventListener('click', hzMinusFN()) /// THIS IS WRONG... Don't call the fn.

// How to add multiple events ?  => addEventListener is the only option.
// onClick and other dom property based event will override any time you add a second event

let multiple = document.getElementById('multiple')
multiple.addEventListener('click', () => {
  let div = document.createElement('div')
  div.innerText = 'This was added by the first event'
  div.style.color = 'blue'
  div.style.fontSize = '30px'
  document.body.prepend(div)
})

const secondEventhandler = (e) => {
  let div = document.createElement('div')
  div.innerText = 'This was added by the second event'
  div.style.color = 'red'
  div.style.fontSize = '30px'
  document.body.append(div)
  // multiple.removeEventListener('click', secondEventhandler)
}
multiple.addEventListener('click', secondEventhandler)

multiple.onclick = () => {
  alert('Took Over 1')
}
multiple.onclick = () => {
  alert('Took Over 2')
}
// multiple.removeEventListener('click', secondEventhandler)

// Keyboard Events
//====> keydown – on pressing the key (auto-repeats if the key is pressed for long),
//====> keyup – on releasing the key.
// More info : https://javascript.info/keyboard-events

document.body.addEventListener('keypress', (e) => {
  // console.log('==> keypress', e)
  if (e.key === 'c') {
    document.body.style.cssText = `background: rgb(131,58,180);
                                   background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);`
  }
  if (e.key === 'r') {
    document.body.style.cssText = `background: 'white';`
  }
  if (e.key === 'k') {
    document.body.style.cssText = `
    background-color: #00DBDE;
    background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
 `
  }
})

// Forms
let nameInput = document.getElementById('name')
let address = document.getElementById('address')
let pets = document.getElementById('pet-select')
let terms = document.getElementById('terms')

let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e)
  console.log('==> name: ', nameInput.value)
  console.log('==> address: ', address.value)
  console.log('==> pets: ', pets.value)
  console.log('==> terms: ', terms.value, terms.checked)
  let elem = document.createElement('div')
  elem.innerHTML = `
  <ul>
    <li> nameInput : ${nameInput.value}</li>
    <li> address : ${address.value}</li>
    <li> pets : ${pets.valu}</li>
    <li> terms : ${terms.checked}</li>
  </ul>
  `
  document.body.append(elem)
})

nameInput.addEventListener('change', (e) => {
  console.log('name')
})

nameInput.addEventListener('focus', (e) => {
  console.log('name focus')
})

//focus
address.addEventListener('focus', (e) => {
  console.log('address focus')
})

multiple.addEventListener('focus', (e) => {
  console.log('multiple focus')
})
// blur => when you move away your focus from the element
nameInput.addEventListener('blur', (e) => {
  console.log('name blur')
})

address.addEventListener('blur', (e) => {
  console.log('address blur')
})

multiple.addEventListener('blur', (e) => {
  console.log('multiple blur')
})
