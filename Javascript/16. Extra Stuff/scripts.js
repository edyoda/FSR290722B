// Conversion : Object <=> Array <=> Strings

// Strings to Arrays:
const string = 'abcdefg'

console.log([...string])
console.log(string.split(''))
console.log(Array.from(string))

// Arrays to String:

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
let text = fruits.toString()
console.log(text)

const elements = ['Fire', 'Air', 'Water']
console.log(elements.join()) // expected output: "Fire,Air,Water"

console.log(elements.join('')) // expected output: "FireAirWater"

console.log(elements.join('-')) // expected output: "Fire-Air-Water"

// Object to Arrays:

const person = { name: 'John', age: 20 }
Object.keys(person) // ["name", "age"]
Object.values(person) // ["John", 20]
Object.entries(person) // [["name", "John"], ["age", 20]];

// Arrays to Objects:
const arr = ['abc', 'xyz', 'pqr']

const obj0 = { ...arr }
console.log(obj0)

const obj1 = Object.assign({}, arr)
console.log(obj1)

const obj2 = {}

arr.forEach((element, index) => {
  obj2[i] = element
})

const pairs = [
  ['name', 'John Doe'],
  ['age', 20],
]
const obj3 = Object.fromEntries(pairs)
console.log(obj3) // { name: 'John Doe', age: 20 }

// Strings to Objects:
const json = '{"result":true, "count":42}'
const data = JSON.parse(json)

console.log(data.count) // expected output: 42

// Objects to Strings:
const myObj = { name: 'John', age: 30, city: 'New York' }

console.log(String(myObj)) // this will not work.  You'll get [object Object]
const myJSON = JSON.stringify(obj)
console.log(myJSON)

// Other question to answer:
// How do you clone an object ?

let user = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
}

/* let clone = Object.assign({}, user); */
let clone = { ...user }

console.log(user.sizes === clone.sizes)

user.sizes.height = '1000'
console.log(user)
console.log(clone)

// How do you check if an object is empty or not ?
// How do you get an object length ?
// How do you compare two objects ?
// How do you prevent an object from changing ?
// How do you prevent an array from changing ?
