// Prototype
// From MDN:
// Every object in JavaScript has a built-in property,which is called its prototype.
// The prototype is itself an object,so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.
const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`)
  },
}

myObject.greet() // Greetings from Madrid

console.log(
  '===> Object.getPrototypeOf(myObject) :',
  Object.getPrototypeOf(myObject)
)

console.log(
  '===> Object.getPrototypeOf([1,2,3,4,5]) :',
  Object.getPrototypeOf([1, 2, 3, 4, 5]),
  typeof Object.getPrototypeOf([1, 2, 3, 4, 5])
)

console.log(
  '===> Object.getPrototypeOf("abcdefg") :',
  Object.getPrototypeOf('abcdefg'),
  typeof Object.getPrototypeOf('abcdefg')
)

let str = 'amefbakjebfawe'
let strProto = Object.getPrototypeOf(str)

console.log('******>', Object.getPrototypeOf(Object.getPrototypeOf(strProto)))
// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// How to set a prototype ?
// Object.setPrototypeOf()

let livingThing = {
  isAlive: true,
}

let animal = {
  eats: true,
  legs: 4,
  walk: function () {
    console.log('I can walk')
  },
}
let rabbit = {
  jumps: true,
}
let dog = {
  barks: true,
}

Object.setPrototypeOf(animal, livingThing)
Object.setPrototypeOf(rabbit, animal)
Object.setPrototypeOf(dog, animal)

console.log('===> animal:', animal)
console.log('===> rabbit:', rabbit)
console.log('===> dog:', dog)
// console.log('===> new rabbit:', rabbit)

// What if you are using a constructor function ?
let animal0 = {
  eats: true,
}

function Rabbit(name) {
  this.name = name
  // this.startEating = function () {
  //   console.log(`${this.name} started eating carrots`)
  // }
  this.isAwake = { value: 'No' }
}

// Rabbit.prototype = animal

Rabbit.prototype.startEating = function () {
  console.log(`${this.name} started eating carrots`)
}

Rabbit.prototype.isSleeping = { value: true }

let rabbit0 = new Rabbit('White Rabbit')

console.log('====> rabbit0.type :', rabbit0.type)

let rabbit1 = new Rabbit('Black Rabbit')
console.log('====> rabbit1 :', rabbit1)

let rabbit2 = new Rabbit('Yellow Rabbit')
console.log('====> rabbit2 :', rabbit2)

console.log('====> rabbit1.startEating() :', rabbit1.startEating())
console.log('====> rabbit2.startEating() :', rabbit2.startEating())

console.log(rabbit0.__proto__.startEating === rabbit1.__proto__.startEating)

// Prototypes and constructor functions
function User(name) {
  this.name = name
  this.canLogin = true
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`)
  }
}

function Customer() {
  this.type = 'customer'
  this.canShop = true
  this.addPayment = true
}

function Admin() {
  this.type = 'Admin'
  this.canManage = true
}

const mike = new Customer()
let temp = new User('Michael')
// mike.__proto__ = temp
Object.setPrototypeOf(mike, temp)
console.log(mike.name)
mike.introduceSelf()

const jim = new Admin()
jim.__proto__ = new User('Jim')
console.log(jim.name)
jim.introduceSelf()

const mikeProto = Object.getPrototypeOf(mike)
const jimProto = Object.getPrototypeOf(jim)

console.log(
  '===> mikeProto:',
  mikeProto,
  '\n==> typeof mikeProto :',
  typeof mikeProto
)
console.log(
  '===> jimProto:',
  jimProto,
  '\n==> typeof jimProto :',
  typeof jimProto
)

// __proto__
// console.log(mike.__proto__)
// console.log(jim.__proto__)
// console.log(
//   'mike.__proto__ === jim.__proto__ :',
//   mike.__proto__ === jim.__proto__
// )

// History of __proto__

// before it was something like this :
let obj = { _proto_: 'abcd' }

// now they added two new methods to read and change the value
obj = {
  _proto_: 'abcd',
  getProto: function () {
    return this._proto_
  },
  setProto: function (value) {
    this._proto_ = value
  },
}
