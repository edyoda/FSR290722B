// //Implicit Conversion
// console.log(true + false)
// console.log(12 / '6')
// console.log('number' + 15 + 3)
// console.log(15 + 3 + 'number')
// console.log(1 > null) // null will be converted into zero
// console.log('foo' + +'bar')
// console.log('true' == true)
// console.log(false == 'false')
// console.log(null == '')
// console.log(!!'false' == !!'true')

// Quiz 1 Q - 9
// var a = 10

// var b = 5

// var c = 12

// var e = 8

// var d

// d = parseInt((a * (c - b)) / e + (b + c) <= (e * (c + a)) / (b + c) + a)

// console.log(d)

// if (d == 1) {
//   // d (NaN) will be converted into a number 0
//   console.log(parseInt((a * (c - b)) / e + (b + c)))
// } else {
//   console.log('False value')
// }

// Quiz 2 Q - 9
var day = 'Fr'

switch (day) {
  case 'Mo':
    console.log('Monday')

  case 'Tu':
    console.log('Tuesday')

  case 'We':
    console.log('Wednesday')

  case 'Th':
    console.log('Thursday')

  case 'Fr':
    console.log('Friday')
  // break
  case 'Sa':
    console.log('Saturday')

  case 'Su':
    console.log('Sunday')
}

// QUiz 1 Q - 6

console.log('value is: ', parseInt('A123xyz'))
console.log('value is: ', parseInt('123xyz'))
console.log('value is: ', parseInt('   123xyz   '))
console.log('value is: ', parseInt('   123  xyz   '))
console.log('value is: ', parseInt('   1 2 3xyz   '))

// Quiz 2 Q -10
console.log('Quiz 2 : Q-10')
console.log(!!'false' == !!'true')
console.log(!!'true' == !!'true')
console.log(!!'kelvin' == !!'false')
console.log(!!'kelvin' == !!'')
console.log(!!'' == !!'false')
console.log(!!'' == !!'')

// Explicit Conversion
console.log("Let's see some more example for conversion to string types")
console.log(typeof String(true))
console.log(typeof String(-98.13))
console.log(typeof String(null))
console.log(typeof String(undefined))
console.log(typeof String(NaN))
console.log(String(true))
console.log(String(-98.13))
console.log(String(null))
console.log(String(undefined))
console.log(String(NaN))

console.log("Let's see some more example for conversion to number types")

console.log(typeof Number('2'))
console.log(typeof Number('-20.198'))
console.log(typeof Number('apple'))
console.log(typeof Number(true))
console.log(typeof Number(false))
console.log(typeof Number(undefined))
console.log(typeof Number(null))
console.log(typeof Number(NaN))

console.log(Number('2'))
console.log(Number('-20.198'))
console.log('Number conversion:', Number('123apple'))
console.log('Number conversion:', Number('apple'))
console.log('parseInt conversion:', parseInt('123apple'))
console.log('parseInt conversion:', parseInt('apple'))
console.log(Number(true))
console.log(Number(false))
console.log(Number(undefined))
console.log(Number(null)) // 0
console.log(Number(NaN))

console.log("Let's see some more example for conversion to boolean types")

console.log(typeof Boolean(1))
console.log(typeof Boolean(0))
console.log(typeof Boolean('abc'))
console.log(typeof Boolean(''))
console.log(typeof Boolean(null))
console.log(typeof Boolean(undefined))

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean('abc')) // non-empty string are true
console.log(Boolean('')) // empty string are false
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(-0))

// Falsy Value in Javascript
console.log('Falsy Value in JS')
if (false) {
  console.log('Hello')
} else {
  console.log('False value')
}
if (null) {
  console.log('Hello')
} else {
  console.log('False value')
}
if (undefined) {
  console.log('Hello')
} else {
  console.log('False value')
}
if (0) {
  console.log('Hello 0.0')
} else {
  console.log('False value')
}
if (0.0) {
  console.log('Hello 0.0')
} else {
  console.log('False value')
}
if (-0) {
  console.log('Hello -0')
} else {
  console.log('False value')
}

if (NaN) {
  console.log('Hello')
} else {
  console.log('False value')
}
if ('') {
  console.log('Hello')
} else {
  console.log('False value')
}

if (Infinity) {
  console.log('Hello Infinity')
} else {
  console.log('False value')
}

// if (infinity) {
//   console.log('Hello Infinity')
// } else {
//   console.log('False value')
// }

// Practice Problems
console.log(Number(null))
console.log(Number(undefined))
console.log(parseInt(undefined))
console.log(Number(true))
console.log(Number(false))
console.log(Number(' 12 '))
console.log(parseInt(' 12 '))
console.log(' 1 2 ', Number(' 1 2 '))
console.log(' 1 2 ', parseInt(' 1 2 '))
console.log(Number('-12.34'))
console.log(Number('\n'))
console.log(Number(' 12s '))
console.log(parseInt(' 12s '))
console.log(Number(123))

// Intro to Objects

let name1 = 'ABC'
let id1 = 1
let school1 = 'North High'
let location1 = 'India'
let isEnrolled1 = true

let name2 = 'XYZ'
let id2 = 2
let school2 = 'North High'
let location2 = 'India'
let isEnrolled2 = false

// convert above into an object

const student1 = {
  name: 'ABC',
  id: 1,
  school: 'North High',
  location: 'India',
  isEnrolled: true,
  grades: 90,
}

const student2 = {
  name: 'XYZ',
  id: 2,
  school: 'North High',
  location: 'India',
  isEnrolled: false,
  grades: 80,
}

const animal = {
  type: 'Dog',
  name: 'Beuno',
  age: 2,
  10: false,
  child: {
    name: 'Scooby',
    age: 1,
  },
}

animal.child.name = 'Bob'
console.log(animal.child.name)

animal.child['name'] = 'Bobby'
console.log(animal.child.name)

// console.log(animal.10); will not work
console.log(animal['10'])

animal.name = 'Jacky'
// animal.'name' = 'Jacky'
console.log(animal.name)

animal['name'] = 'Jack'

console.log(animal.type)
console.log(animal.name)
console.log(animal.age)
animal.location = 'IN'
console.log(animal.location)

/// how JS stores the variables:
let n = 10
let m = n
console.log('n:', n)
console.log('m:', m)

const myobj = {
  name: 'kelvin',
}
console.log(myobj)
console.log(myobj.name)

// myobj = { name: 'Bruce' }

myobj.name = 'Bruce'

console.log(myobj)
