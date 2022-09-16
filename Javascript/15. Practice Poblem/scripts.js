// requirements:
// AS a user I should be...
let list = [
  { id: 0, text: 'Upper Body Workout', isChecked: false },
  { id: 1, text: 'Pay Bills', isChecked: true },
  { id: 2, text: 'Meet Batman', isChecked: false },
  { id: 3, text: 'Buy Eggs', isChecked: false },
  { id: 4, text: 'Read a book', isChecked: false },
]

// let deletedItems = []

// other ways
//  { id: 0, text: 'Upper Body Workout', other: 'checked', tag : 'food' }
let input = document.querySelector('#input')
let displayedList = document.querySelector('#listInDisplay')

// able to delete the added items (both incomplete and complete)
const addDeleteButton = (element) => {
  let newDeleteButton = document.createElement('button')
  newDeleteButton.innerText = 'Delete'
  newDeleteButton.classList.add('deleteBtn')
  newDeleteButton.addEventListener('click', () => {
    newDeleteButton.parentElement.style.display = 'none'
    console.log('before delete:', list)
    list = list.filter(
      (item) => item.text !== newDeleteButton.parentNode.childNodes[0].nodeValue
    )
    console.log('after delete:', list)
    // move deleted items to deleted UL list
    // move the deleted item to deleted array list
  })
  element.appendChild(newDeleteButton)
}

// able to see the current list of items
list.forEach((item) => {
  let listOItem = document.createElement('li')
  listOItem.innerText = item.text
  if (item.isChecked === true) {
    listOItem.classList.toggle('checked')
    listOItem.classList.add('checked')
  }
  displayedList.appendChild(listOItem)
})

// able to complete an existing item by clicking on it
// able to revert the completed item and make it incomplete by clicking on it
Array.from(displayedList.children).forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('checked')
  })
  addDeleteButton(element)
  let itemToChange = list.filter((item) => item.text === element.innerText)
  itemToChange.isChecked = itemToChange.isChecked === true ? false : true
  // itemToChange.isChecked = !itemToChange.isChecked
})

// able to add a new item

// checks/constrains:
// 1. use input with an add button.
// 2. prevent the user from adding an empty item : string with length 0 or string with just whitespace
// 3. minimum string length is 2 characters that are not empty spaces
// 4. clear input after adding the new item successfully
// 5. remove empty spaces before and after the text

let addButton = document.querySelector('#addBtn')

addButton.addEventListener('click', () => {
  let value = input.value

  if (value && value.trim() && value.trim().length > 2) {
    let validatedInput = value.trim()
    let newItem = document.createElement('li')
    newItem.innerText = validatedInput
    newItem.addEventListener('click', () => {
      newItem.classList.toggle('checked')
    })
    addDeleteButton(newItem)
    list.unshift({
      id: list.length + 1,
      text: validatedInput,
      isChecked: false,
    })
    displayedList.prepend(newItem)
    input.value = ''
  } else {
    alert('Please enter a valid input')
  }
})

// Homework (completely optional):
// implement edit an item
// undo deleted items => you will need to collected deleted items separately
// add tags like : type of todo ... personal, education, work, grocery, .. each item can have multiple tags
// make newly added items persistent even on page refresh
