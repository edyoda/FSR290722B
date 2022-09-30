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
 */

class Person {
  name // this is optional

  constructor(name) {
    this.name = name
    console.log('===> logging from : Person')
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`)
  }
}

// the extends keyword to say that this class inherits from another class.
class Professor extends Person {
  teaches

  constructor(name, teaches) {
    console.log('===> Begin constructing : Professor')

    super(name) // If a subclass has any of its own initialization to do, it must first call the superclass constructor using super(), passing up any parameters that the superclass constructor is expecting.
    this.teaches = teaches
    console.log('===> logging from : Professor')
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    )
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1)
    console.log(grade)
  }
}

const walsh = new Professor('Walsh', 'Psychology')
walsh.introduceSelf() // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade('my paper') // some random grade

class Student extends Person {
  year

  constructor(name, year) {
    super(name)
    this.year = year
  }

  // We've also overridden the introduceSelf() method from the superclass, and added a new method grade(), to grade a paper
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.year}.`)
  }

  canStudyArchery() {
    return this.year > 1
  }
}

const summers = new Student('Summers', 2)

summers.introduceSelf() // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery() // true
