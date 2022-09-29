function Cat(name, breed, color) {
  this.name = name
  this.breed = breed
  this.color = color
  //   this.greetings = function () {
  //     console.log(`Hello, said ${this.name} the ${this.breed}.`)
  //   }
}

Cat.prototype.greeting = function () {
  console.log(`Hello, said ${this.name} the ${this.breed}.`)
}

const cat001 = new Cat('Bertie', 'Cymric', 'white')
const cat002 = new Cat('Elfie', 'Aphrodite Giant', 'ginger')

cat001.greeting()
cat002.greeting()

class CatClass {
  constructor(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color
  }

  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`)
  }
}

const cat01 = new CatClass('Bertie', 'Cymric', 'white')
const cat02 = new CatClass('Elfie', 'Aphrodite Giant', 'ginger')

cat01.greeting()
cat02.greeting()
