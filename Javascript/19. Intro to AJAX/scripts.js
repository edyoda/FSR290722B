// Invalid JSON Example:
let user = {
  sayHi() {
    // ignored
    alert('Hello')
  },
  [Symbol('id')]: 123, // ignored
  something: undefined, // ignored
}

console.log(JSON.stringify(user)) // {} (empty object)

//

let list = document.querySelector('.list')

function getInitialTodoList() {
  const req = new XMLHttpRequest()
  console.log('START => getInitialTodoList')

  // open() accepts 3 params, 1st is the request method, 2nd is the URL and 3rd accepts a boolean value to define whether the call is synchronous or asynchronous. It is recommended to make it asynchronous.

  req.open('get', 'https://jsonplaceholder.typicode.com/todos', true)

  req.onreadystatechange = function () {
    // if (this.readyState === 0) {
    //   console.log('0 => UNSENT')
    // }
    // if (this.readyState === 1) {
    //   console.log('1 => OPENED')
    // }
    // if (this.readyState === 2) {
    //   console.log('2 => HEADERS_RECEIVED')
    // }
    // if (this.readyState === 3) {
    //   console.log('3 => LOADING')
    // }
    if (this.readyState === 4) {
      if (this.status == 200) {
        const data = JSON.parse(this.responseText)
        console.log('4 => DONE: ', data)

        // for (key in data) {
        //   console.log('--->', key, data[key])
        // }

        for (value of data) {
          let listItem = document.createElement('li')
          listItem.innerText = value.title
          list.append(listItem)
        }
      } else {
        console.log('Error:', this.status)
      }
    }
  }
  req.send()
  console.log('END => getInitialTodoList')
}

function addANewTodoItem() {
  let btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    let input = document.querySelector('input')

    console.log('=====> input value', input.value)
    const postReq = new XMLHttpRequest()

    const newTodoObj = JSON.stringify({
      userId: 10,
      title: input.value,
      completed: false,
    })

    postReq.open('post', 'https://jsonplaceholder.typicode.com/todos', true)

    postReq.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status == 201) {
          const data = JSON.parse(this.responseText)
          console.log('4 => DONE: ', data)

          let listItem = document.createElement('li')
          listItem.innerText = input.value
          list.prepend(listItem)
        } else {
          console.log('Error:', this.status)
        }
      }
    }
    postReq.send(newTodoObj)
  })
}

getInitialTodoList()
addANewTodoItem()

// Homework: delete a todo item on button click
