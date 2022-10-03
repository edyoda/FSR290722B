// Class

/**
 * Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming
 * 

=> Person is the superclass or parent class of both Professor and Student. 
=> Conversely, Professor and Student are subclasses or child classes of Person.


class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
        attendClass()
 */

// Is-A Relationship => Inheritance
class Person {
  // name
  constructor(name) {
    this.name = name
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`)
  }
}

console.log('====> person1', new Person('ABC'))
console.log('====> person2', new Person('XYZ'))

class Professor extends Person {
  // teaches
  constructor(name, teaches) {
    super(name)
    this.teaches = teaches
  }
  introduceSelf() {
    console.log(`Hi! This is Professor ${this.name}`)
  }
  grade(paper) {
    console.log(`${paper} got graded`)
  }
}
const prof1 = new Professor('XYZ', 'math')
const prof2 = new Professor('ABC', 'art')
console.log('====> Professor1', prof1)
console.log('====> Professor2', prof2)

class Student extends Person {
  year
  constructor(name, year) {
    super(name)
    this.year = year
  }

  introduceSelf(startGreeting = 'Hi There!', endGreeting = 'Good Bye!') {
    console.log(startGreeting)
    console.log(`Yo! This is ${this.name}!`)
    console.log(endGreeting)
  }

  attendClass() {
    console.log("Right now I'm am attending a class")
  }
}

const student1 = new Student('John', 2)
const student2 = new Student('Mike', 3)
console.log('====> Student 1', student1)
console.log('====> Student 2', student2)

// Polymorphism
student1.introduceSelf()
student1.introduceSelf('Hola!')
student1.introduceSelf('Hey You!', 'Talk to you later')

// Has-A relationship => Composition
class Car {
  brand
  modelName
  year
  engine
  constructor(brand, modelName, year, engine) {
    this.brand = brand
    this.modelName = modelName
    this.year = year
    this.engine = engine
  }
}

class Engine {
  type
  cylinders
  constructor(type, cylinders = 4) {
    this.type = type
    this.cylinders = cylinders
  }
  autoClean() {
    console.log(`${this.type} has been auto cleaned`)
  }
}

const v8 = new Engine('v8', 8)
const myCar = new Car('Ford', 'Mustang', '2019', v8)

console.log('====> myCar', myCar)

//Factory Pattern
class Brand {
  name
  logoURL
  constructor(name) {
    this.name = name
  }
}

const v4 = new Engine('v4', 4)
const v6 = new Engine('v6', 6)

const fordUSCarFactory = function (modelName = 'N/A', year = '0', engine = v6) {
  const ford = new Brand('Ford')
  return new Car(ford, modelName, year, engine)
}

const F150_US = fordUSCarFactory('F150', '2022', v8)
console.log('>>>>>> F150_US', F150_US)

const fordEUCarFactory = function (modelName = 'N/A', year = '0', engine = v4) {
  const ford = new Brand('Ford')
  return new Car(ford, modelName, year, engine)
}
const F150_EU = fordUSCarFactory('F150', '2022')
console.log('>>>>>> F150_EU', F150_EU)
