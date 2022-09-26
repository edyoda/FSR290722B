//Objects => members : variables/properties and functions/methods
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`)
  },
}

console.log(
  person.name,
  person.name[0],
  person.age,
  person.bio(),
  person.introduceSelf()
)

// If members are functions then you can use a shorter form:
const person1 = {
  name: ['Bob', 'Smith'],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`)
  },
}

// "This" keyword
// It’s common that an object method needs to access the information stored in the object to do its job.

const person2 = {
  name: ['Bob', 'Smith'],

  introduceSelf() {
    console.log(`Hi! I'm ${person2.name[0]}.`)
  },
}

// You are probably wondering what "this" is. The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. So why not just write person instead like in above example of person2 ?

let user = {
  name: 'John',
  age: 30,

  sayHi() {
    alert(user.name) // leads to an error
  },
}

let admin = user
user = null // overwrite to make things obvious

admin.sayHi() // TypeError: Cannot read property 'name' of null

// Using this you don't have to worry about accessing the properties inside a methods
const person01 = {
  name: 'Chris',
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`)
  },
}

const person02 = {
  name: 'Deepti',
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`)
  },
}

/**
 *
 * The value of this is evaluated during the run-time, depending on the context.
 *
 *
 */

function sayHi() {
  alert(this.name) /// there is no meaning of this  here
}

// Now the same sayHi function is assigned to two different objects
let player = { name: 'John' }
let boss = { name: 'Admin' }

function sayHi() {
  alert(this.name)
}

// use the same function in two objects
player.f = sayHi
boss.f = sayHi

// these calls have different this
// "this" inside the function is the object "before the dot"
player.f() // John  (this == user)
boss.f() // Admin  (this == admin)

boss['f']() // Admin (dot or square brackets access the method – doesn't matter)

// factory functions
// What if we just use object literals create thousands of person objects ?

// We have to write out the same code for every object we create, and if we want to change some properties of the object - like adding a height property - then we have to remember to update every object.

// Is there any way to pass just the name, age and other properties to a function that will return a object with all the members?

function createPerson(name) {
  // if you have to add or change any members you just need to do it below
  const obj = {}
  obj.name = name
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`)
  }
  return obj
}

const personChris = createPerson('Chris')
const personJohn = createPerson('John')
console.log('==> createPerson("Chris")', personChris)
console.log('==> createPerson("John")', personJohn)

// An even better way is to use a constructor.

//  There are two conventions though:
// 1. They are named with capital letter first.
// 2. They should be executed only with "new" operator.
// A constructor is just a function called using the new keyword.
function Person(name) {
  this.name = name
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`)
  }
}

const mike = new Person('Michael')
console.log(mike.name)
mike.introduceSelf()

const jim = new Person('Jim')
console.log(jim.name)
jim.introduceSelf()
