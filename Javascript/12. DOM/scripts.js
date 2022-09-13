/**
 *  Window object consists of:
 * 1. Document Object Model (DOM) => represents all page content as objects that can be modified.
 * 2. Browser Object Model (BOM) => Browser APIs like navigator, screen, location, frames, history
 * 3. JavaScript => Array, Object, Function
 */

console.log('window object', window)

// In a browser, global functions and variables declared with var (not let/const!) become the property of the window object:

var str = 'Test String'

console.log(str)
console.log(window.str)

str = ' Modified Test String'

console.log(str)
console.log(window.str)

console.log(str === window.str)

// DOM
console.log('DOM', document, window.document)
console.log(document === window.document)

// What is a node ?

/** 
 * There are 12 node types. We mostly use following types of nodes:
 * 
 * 1. Element Nodes
 *  => represents html elements (they have tags.) For example: <h1>Heading</h1>
 * 
 * 2. Text Nodes
 *   => Spaces and newlines are totally valid characters, like letters and digits. They form text nodes and become a part of the DOM.
 *   => if there are spaces (just like any character) in the document, then they become text nodes in the DOM, and if we remove them, then there won’t be any.
 * 
 * 3. Comment Nodes:  HTML comments like  <!-- this is a comment  -->
 * 
 * 
 * 

*/

// document object: All operations on the DOM start with the document object. That’s the main “entry point” to DOM. From it we can access any node.

// You can access body and head like this:
console.log(document.head)
console.log(document.body)

// body can be null !!!
// if a script is inside <head>, then document.body is unavailable, because the browser did not read it yet.
// So, in the example below the first alert shows null:

const nullBody = `
<html>

<head>
  <script>
    alert( "From HEAD: " + document.body ); // null, there's no <body> yet
  </script>
</head>

<body>

  <script>
    alert( "From BODY: " + document.body ); // HTMLBodyElement, now it exists
  </script>

</body>
</html>
 `

// Please read this as well: https://stackoverflow.com/questions/3037725/is-it-wrong-to-place-the-script-tag-after-the-body-tag

/**
 *  Try below HTML code at :
 * https://software.hixie.ch/utilities/js/live-dom-viewer/
 * http://bioub.github.io/dom-visualizer/
 */
const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <h1>Intro to JS</h1>
    <div>Begin</div>
    This is some random text without any HTML tags
    <ul>
        <li>
            <b>Item 1</b>
        </li>
        <!-- comment 1 -->
        <li>
            <b>Item 2</b>
        </li>
        <!-- comment 2 -->
        <li>
            Item 3
        </li>
        <!-- comment 3 -->
        <li>
            Item 4
        </li>
        <!-- comment 4 -->
    </ul>
</body>
</html>
 `

// Some properties of Node object

console.log(document.body.childNodes[5].nodeName) // UL
console.log(document.body.childNodes[5].nodeType) // number corresponds to 12 node types
// nodeType == 1 for element nodes, [ELEMENT_NODE = 1]
// nodeType == 3 for text nodes, [TEXT_NODE = 3]
// nodeType == 8 for comment nodes, [COMMENT_NODE = 8]
console.log(document.body.childNodes[5].nodeValue) // null for most nodes. Works fine for text and comment nodes
// console.log(
//   document.body.childNodes[5].childNodes[1].childNodes[1].childNodes[0]
//     .nodeValue
// )

// childNodes
console.log(document.body.childNodes) // not an array, so most array methods won't work
console.log(Array.isArray(document.body.childNodes))
console.log(Array.isArray([...document.body.childNodes])) // converted into an array
console.log(document.body.parentNode)
console.log(document.body.nextSibling)
console.log(document.body.previousSibling)
console.log(document.body.firstChild)
console.log(document.body.lastChild)

// Node methods:
//  => appendChild()
//  => cloneNode()
let secondPara = document.body.childNodes[7].childNodes[3].cloneNode(true)

document.body.childNodes[7].appendChild(secondPara)

// More ...
//  => hasChildNodes()
//  => removeChild()
//  => compareDocumentPosition()
//  => contains()
//  => insertBefore()
//  => replaceChild()

//==> Elements

// an element is a node of a specific type — element (Node.ELEMENT_NODE)
// <html>, <head>, <body>, <h1>, <ul>, <li>, <p> are all elements because they are represented by tags.
// Instead of saying “Get the second child of the sixth child of the document body”, it’d be better if we could say “Get the first h1 in the document”.
// - From https://eloquentjavascript.net/14_dom.html

// Here H1 is both a node and an element
let h1 = document.body.children[0]
h1.style.background = 'aqua'
console.log('==> h1 instanceof Node: ', h1 instanceof Node) // => true
console.log('==> h1 instanceof HTMLElement: ', h1 instanceof HTMLElement) // => true

console.log('==> h1: ', h1)
console.log('==> h1.nodeName: ', h1.nodeName)
console.log('==> h1.nodeType: ', h1.nodeType)

let ul1 = document.body.children[2]
console.log('===> ul1.firstElementChild: ', ul1.firstElementChild.nodeName)
console.log('===> ul1.lastElementChild: ', ul1.lastElementChild.nodeName)
console.log('===> ul1.nextElementSibling: ', ul1.nextElementSibling.nodeName)
console.log(
  '===> ul1.previousElementSibling: ',
  ul1.previousElementSibling.nodeName
)
console.log('===> ul1.parentElement', ul1.parentElement.nodeName)

//====> Searching Nodes/Elements
let li1 = document.querySelector('li') // you can use any css selectors
// let li1 = document.querySelector('.class-name') // you can use any css selectors
// let li1 = document.querySelector('#idValue') // you can use any css selectors
// let li1 = document.querySelector(' p > div ') // you can use any css selectors
console.log("===> document.querySelector('li;):", document.querySelector('li'))
// querySelector() => Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.
// querySelectorAll() => Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.
let list = document.querySelectorAll('li') // you can use any css selectors
console.log('querySelectorAll(li): ', list)
list[3].style.background = 'aqua'
// Checkout some selector patterns here: https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list

//=====> To access elements: getElementsBy*

// All methods "getElementsBy*" return a live collection.
// get all divs in the document
let firstListItem = document.getElementById('1') // gives you a single element
firstListItem.style.background = 'yellow'

let divs = document.getElementsByTagName('div') // gives you a list
divs[0].style.background = 'lightblue'
divs[1].style.background = 'lightblue'

let listItems = document.getElementsByClassName('list-item') // gives you a list
listItems[2].style.background = 'orange'

//===> Create & Update an element:

let div = document.createElement('div')
div.className = 'alert'
div.innerHTML =
  '<strong>This is an artificial element created in a lab.</strong>'

div.style.background = 'red'
div.style.color = 'white'
div.style.fontSize = '30px' // notice the camel-case in the work "fontSize"
document.body.append(div)
document.body.append(div.cloneNode(true))

let ul = document.getElementById('ul')
let newListItem = document.createElement('li')
newListItem.className = 'list-item'
newListItem.id = '5'

// How to change the text of the element
newListItem.innerText = 'Item 5'

// let text = document.createTextNode('Item 5')
// newListItem.appendChild(text)

newListItem.style.background = 'red'
ul.append(newListItem)
// Diff between append and appendChild => please read this: https://dev.to/ibn_abubakre/append-vs-appendchild-a4m
// ul.append(newListItem.cloneNode(true))
// ul.appendChild(newListItem)

//===> Delete element
// ul.removeChild(newListItem) // will remove a child of the parent
// newListItem.remove() // remove the item itself

// add/remove/toggle class
newListItem.classList.add('custom-list-item')
let temp = document.getElementsByClassName('custom-list-item')
console.log('temp[0].classList: ', temp[0].classList)

newListItem.classList.remove('list-item')
console.log('temp[0].classList: ', temp[0].classList)

newListItem.classList.toggle('toggle-class') // think of this as an electric switch
console.log('temp[0].classList: ', temp[0].classList)

newListItem.classList.toggle('toggle-class')
console.log('temp[0].classList: ', temp[0].classList) // notice "toggle-class" is gone

//===> Style

let myDiv = document.querySelector('#my-style').style

//set
myDiv.setProperty('font-size', '30px')
myDiv.setProperty('background', 'blue')
myDiv.setProperty('border', '1px solid black')
myDiv.setProperty('width', '100px')
myDiv.setProperty('height', '100px')

//get
console.log(myDiv.getPropertyValue('background-color'))
console.log(myDiv.getPropertyValue('border'))
console.log(myDiv.getPropertyValue('width'))
console.log(myDiv.getPropertyValue('height'))

/* remove
myDiv.removeProperty('background-color');
myDiv.removeProperty('border');
myDiv.removeProperty('width');
myDiv.removeProperty('height');
*/

//===> Change element:
let para = document.querySelector('p')
console.log('===> para.textContent:', para.textContent)
para.textContent = ' This is a paragraph       1'
console.log('===> before: para.innerText:', para.innerText)
para.innerText = ' This is a paragraph       1'
console.log('===> after: para.innerText:', para.innerText)
console.log('===> para.innerHTML:', para.innerHTML)

para.innerHTML = '<input/>'
