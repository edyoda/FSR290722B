function square(n) {
  console.log(n * n)
}

let num = 2

square(num)

num = 3
square(num)

function printHello() {
  console.log('hello there')
}

printHello()
printHello()
// const console = {
//   log: function (input){
//       //there is more stuff here;
//   },
//   id: 10
// }

// console.id;
// console.log("Kelvin");

// function with a return value

function cube(i) {
  // i = 3 or  i = 4
  let cubeValue = i * i * i
  return cubeValue
}

let num2 = 3
let numCubedValue = cube(3)

console.log('numCubedValue : ', numCubedValue)

cube(4)

// add two numbers

let aa = 4
let bb = 6

function sum(p, q) {
  return p + q
}

let sumValue = sum(aa, bb)
console.log('sum : ', sumValue)

function giveLastItem(arr) {
  // arr = [1, 2, 3, 4]
  return arr[arr.length - 1] // arr[3]
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ans = giveLastItem(myArr)

console.log('last item : ', ans)

// console.log('last item : ', giveLastItem([1, 2, 3, 4]))

// Anonymous Function =  a function without name
const printFirstandLast = function ([first, ...rest]) {
  let lastItem = rest[rest.length - 1]
  return [first, lastItem]
}

let ans1 = printFirstandLast([1, 2, 3, 4, 5, 6])
console.log('printFirstandLast', ans1)

// Local variables are visible only inside the function definition

function showMessage() {
  let message = "Hello, I'm JavaScript!" // local variable
  alert(message)
}

showMessage() // Hello, I'm JavaScript!

// alert(message) // <-- Error! The variable is local to the function

// Outer variables can be used inside a function definition

let userName = 'John'

function showMessage0() {
  let message = 'Hello, ' + userName
  alert(message)
}

showMessage0() // Hello, John

// shadowing the outer variables

let user1 = 'John'

console.log('user :', user1)

function showMessage1() {
  user1 = 'Kelvin' // this will be used first
  let message = 'Hello, ' + user1
  alert(message)
}

showMessage1() // Hello, John

console.log('user :', user1)

// Hoisting

// var
// console.log('carNameVar: ', carNameVar)
// carNameVar = 'Volvo'
// var carNameVar

// let or const
// console.log('carNameLet: ', carNameLet)

// carNameLet = 'Volvo'
// let carNameLet

// How to deal with error related to hoisting in let and const ?

let carNameLet3

console.log('carNameLet: ', carNameLet3)

carNameLet3 = 'Volvo'

// what is temporal dead zone ?

// Function expression are not hoisted !!

/*
console.log(getRectArea(3, 4));

const getRectArea = function getRectArea(width, height) {
  return width * height;
};
*/

// expected output: Error: Cannot access 'getRectArea' before initialization

// Arrow function

const arrowFn = () => {
  console.log('This is an arrow fn')
}

arrowFn()

const findSum0 = (x, y) => x + y
const findSum1 = (x, y) => {
  x + y // will give you undefined as there is no return keyword
} // if you use curly braces and want to return a value then you must use a return keyword
const findSum2 = (x, y) => {
  console.log(' from inside of an arrow fn: ', x + y)
  return x + y
}
const findSum3 = (x, y) => {
  const ans = x + y
  return ans
}

console.log(findSum0(1, 1))
console.log(findSum1(1, 1))
console.log(findSum2(1, 1))
console.log(findSum3(1, 1))

const findSum4 = (x, y, z, p, q, r) => x + y + z + p + q + r
const printArray = (arr) => console.log(arr)
