// Mouse events:

// mousedown/mouseup => Mouse button is clicked/released over an element.
let text = document.querySelector('#text')
text.addEventListener('mousedown', () => {
  console.log('=>mousedown')
  text.style.background = 'yellow'
})
text.addEventListener('mouseup', () => {
  console.log('=>mouseup')
  text.style.background = 'orange'
})
// mouseover/mouseout => Mouse pointer comes over/out from an element.

text.addEventListener('mouseover', () => {
  console.log('=>mouseover')
})
text.addEventListener('mouseout', () => {
  console.log('=>mouseout')
})

// mousemove => Every mouse move over an element triggers that event.
text.addEventListener('mousemove', () => {
  console.log('=>mousemove')
})

function clickhandler() {
  console.log('=>click')
}

// click => Triggers after mousedown and then mouseup over the same element if the left mouse button was used.
text.addEventListener('click', clickhandler)
// dblclick => Triggers after two clicks on the same element within a short timeframe.
text.addEventListener('dblclick', () => {
  console.log('=>dblclick')
})
// contextmenu => Triggers when the right mouse button is pressed. There are other ways to open a context menu, e.g. using a special keyboard key, it triggers in that case also, so it’s not exactly the mouse event.
text.addEventListener('contextmenu', () => {
  console.log('=>contextmenu')
})

// Event order: mousedown → mouseup → click.
// A left-button click first triggers mousedown, when the button is pressed, then mouseup and click when it’s released.

// Pointer Events: modern way to handle click.touch events
// More info here: https://javascript.info/pointer-events
// pointerdown <==>	mousedown
text.addEventListener('pointerdown', () => {
  console.log('=>pointerdown')
})
// pointerup <==>	mouseup
text.addEventListener('pointerup', () => {
  console.log('=>pointerup')
})
// pointermove <==>	mousemove
text.addEventListener('pointermove', () => {
  console.log('=>pointermove')
})
// pointerover <==>	mouseover
text.addEventListener('pointerover', () => {
  console.log('=>pointerover')
})
// pointerout <==>	mouseout
text.addEventListener('pointerout', () => {
  console.log('=>pointerout')
})

// Co-Ordinates
//  There are multiple properties based on what you take as a reference
// Window as a reference : clientX/clientY =>  calculated from the window top/left edge (viewport).
// Document as a reference : pageX/pageY => calculated from the document top/left edge.
// Screen as a reference: screenX/screenY => calculated from the screen (display/monitor) top/left corner.
// Find more info here: https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y

let coOrdinates = document.createElement('div')

document.body.addEventListener('click', (e) => {
  let cx = e.clientX
  let cy = e.clientY
  let px = e.pageX
  let py = e.pageY
  let sx = e.screenX
  let sy = e.screenY

  coOrdinates.innerText =
    'cx: ' +
    cx +
    ' cy: ' +
    cy +
    ' px: ' +
    px +
    ' py: ' +
    py +
    ' sx: ' +
    sx +
    ' sy: ' +
    sy

  document.body.append(coOrdinates)
})

// Timers
// setTimeout() => will execute after x milliseconds but only once
// window.setTimeout(function, milliseconds); => returns a variable for future reference
// window.clearTimeout(timeoutVariable). where timeoutVariable => the variable returned from setTimeout():

console.log('start settimeout')

function sayHello() {
  console.log('inside 5000')
}

console.log(' normal 1')
let timerID01 = setTimeout(() => console.log('inside 0 1'), 0)
console.log(' normal 2')

let timerID0 = setTimeout(sayHello, 5000)
console.log(' normal 3')

let timerID1 = setTimeout(() => console.log('inside 3000 1'), 3000)
console.log(' normal 4')

let timerID2 = setTimeout(() => console.log('inside 3000 2'), 3000)
console.log(' normal 5')

let timerID02 = setTimeout(() => console.log('inside 0 2'), 0)

console.log('end settimeout')

clearTimeout(timerID02)

// setInterval() => will repeat after x milliseconds
// window.setInterval(function, milliseconds);
// window.clearInterval(timerVariable)
console.log('start setInterval')

let tiermIdA = setInterval(() => {
  console.log('tick')
}, 2000)
console.log('end setInterval')
