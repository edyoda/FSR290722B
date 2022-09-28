// Refactor below code and make it "DRY":
const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`)
  },
}

const cat2 = {
  name: 'Elfie',
  breed: 'Aphrodite Giant',
  color: 'ginger',
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`)
  },
}

cat.greeting()
cat2.greeting()

// solution :

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

const cat01 = new Cat('Bertie', 'Cymric', 'white')
const cat02 = new Cat('Elfie', 'Aphrodite Giant', 'ginger')

cat01.greeting()
cat02.greeting()
