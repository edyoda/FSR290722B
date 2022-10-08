// Callbacks and Higher Order Function

function multiply(x, y) {
  return x * y
}

// you can also pass functions as an argument to  a function/method

//  When you do this the function you're passing as an argument is called a callback function and the function you're passing the callback function to is called a higher order function.

function squareIt(x, callBack) {
  return callBack(x, x)
}
console.log(squareIt(10, multiply))

function squareIt(x, callBack) {
  return callBack(x, x)
}
console.log(squareIt(10, multiply))
//------------------------------------------------------------
// Promises

// How to to do things sequentially ?
function delay(seconds, callback) {
  setTimeout(callback, seconds * 1000)
}

console.log('start')
// delay(2, () => {
//   console.log('two seconds')
// })
console.log('end')
//------------------------------------------------------------
// Callbacks Hell
console.log('start')
// delay(2, () => {
//   console.log('two seconds')
//   delay(1, () => {
//     console.log('three seconds')
//     delay(1, () => {
//       console.log('four seconds')
//     })
//   })
// })
// console.log('end')

//------------------------------------------------------------
// converting to promise
console.log('start')

const delayPromisified = (seconds, callback) =>
  new Promise((resolves, rejects) => {
    setTimeout(resolves(callback('done')), seconds * 1000)
  })

// delayPromisified(1).then((data) => console.log(data, 'with the delay'))

// delayPromisified(2, (data) => data)
//   .then(console.log)
//   .then(() => {
//     return 77
//   })
//   .then((data) => {
//     console.log('**', data)
//     return 66
//   })
//   .then((data) => {
//     console.log('**', data)
//     return 55
//   })
//   .then((data) => {
//     console.log('**', data)
//     return 44
//   })
//   .then((number) => console.log(' ==>> number =>', number))

// console.log('end')
//------------------------------------------------------------
// Using catch
const delayPromisifiedCatch = (seconds, callback) =>
  new Promise((resolves, rejects) => {
    throw new Error('Error happened !!')
    setTimeout(resolves('=============> done'), seconds * 1000)
  })

// delayPromisifiedCatch(2)
//   .then(console.log)
//   .then((number) => console.log('number =>', number))
//   // .then(() => {
//   //   throw new Error('Error happened !!')
//   // })
//   .catch((error) => console.log('Caught an error:', error))

//------------------------------------------------------------

// Using reject

const delayPromisifiedReject = (seconds, callback) =>
  new Promise((resolves, rejects) => {
    if (seconds > 10) {
      rejects(new Error('This is too long !!'))
    }
    setTimeout(resolves('====> done'), seconds * 1000)
  })

// delayPromisifiedReject(20)
//   .then(console.log)
//   .then(() => 99)
//   .then((number) => console.log('number =>', number))
//   .catch((error) => console.log('Caught an error:', error))

// Practice

console.log('==========> Begin')

setTimeout(() => console.log('From setTimeout 0'), 0)

new Promise(function (resolve, reject) {
  // not taking our time to do the job
  resolve(123) // immediately give the result: 123
}).then(console.log)

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(100), 0)
}).then(console.log)

new Promise(function (resolve, reject) {
  // not taking our time to do the job
  resolve(456) // immediately give the result: 123
}).then(console.log)

setTimeout(() => console.log('From setTimeout 1'), 0)

console.log('==========> End')

//fetch

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => alert(data.title))
  .catch((error) => {
    console.error('Error:', error)
  })
