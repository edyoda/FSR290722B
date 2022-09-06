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
// animal[name] = 'Jack' // don't use this way to acces a value for the key: name

console.log(animal.type)
console.log(animal.name)
console.log(animal.age)
animal.location = 'IN'
console.log(animal.location)

//Nested objects

const address = {
  street: {
    primary: 'abcd street',
    secondary: ' neard pqr street',
  },
  apt: {
    number: 20,
    floor: 5,
  },
  location: {
    country: {
      name: 'India',
      continent: 'Asia',
    },
    zipcode: '00000',
  },
}
// 1. use dot operator obj.id
let cont = address.location.country.continent
console.log('continent:', cont)

// 2. use [] notation : obj['id']
// let cont = address.location.country['continent']

let cName = address.location.country['name']
console.log('country name:', cName)

console.log(address.location)

// Comparison by Value vs Comparison by Reference
let n = 10
let m = n
console.log('n:', n)
console.log('m:', m)

n = 20

console.log('n:', n)
console.log('m:', m)

// m = n
// console.log('n:', n)
// console.log('m:', m)

let str1 = 'abc'
let str2 = str1
console.log('str1:', str1)
console.log('str2:', str2)

str1 = 'xyz'

console.log('str1:', str1)
console.log('str2:', str2)

console.log(str1 == str2)
console.log(str1 === str2)

// Object
const momsCar = { model: 'Swift' }
const dadsCar = momsCar // copy the reference

momsCar.model = 'BMW'
console.log('momsCar: ', momsCar)
console.log('dadsCar: ', dadsCar)

console.log(momsCar == dadsCar) // true, both variables reference the same object
console.log(momsCar === dadsCar) // true

let momsCar1 = { model: 'Swift' }
let dadsCar1 = { model: 'Swift' }

console.log(momsCar1 == dadsCar1) // false , Both mom and dad will get their own Swift
console.log(momsCar1 === dadsCar1) // false

// add and remove properties

let Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer',
  // printAge: () => console.log('Hello'),
}

console.log('Employee:', Employee)

console.log(delete Employee.name) // returns true
console.log('Employee:', Employee)
console.log(delete Employee.age) // returns true
console.log('Employee:', Employee)

// When trying to delete a property that does
// not exist, true is returned
console.log(delete Employee.salary) // returns true
console.log('Employee:', Employee)

// Delete the whole object
// Employee = null
console.log(delete Employee)
console.log('Employee:', Employee)

Employee.favColor = 'Red'
console.log('Employee:', Employee)

Employee['favFood'] = 'Nachos'
console.log('Employee:', Employee)

Employee.address = {
  City: 'Delhi',
  Country: 'India',
}
console.log('Employee:', Employee)

// change properties
Employee.favColor = 'Blue'
console.log('Employee:', Employee)

Employee['favFood'] = 'Burritos'
console.log('Employee:', Employee)

// console.log(Employee.printAge())

let s1 = 'John'
let s2 = 'Alice'
let s3 = 'Cara'
let s4 = 'Bob'

s1 = 'Alice'
s2 = 'Bob'

// Arrays

let arr = [1, 2, 3, 4, 5]
let arr1 = [1, 'abc', true, { name: 'XYZ' }, [8, 7, 6]]

console.log(arr)
console.log(arr1)

console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// let str = "abcd"
// str[0]
// str[1]

const arr2 = [12, 43, 45, 13, 64, 87, 53, 23, 65, 8]
const arr3 = arr2

console.log(arr2 == arr3)
console.log(arr2 === arr3)

// how to change array value

console.log(arr2[2])
arr2[2] = 55
console.log(arr2[2])

// const arr2 = [12, 43, 45, 13, 64, 87, 53, 23, 65, 8]
let nn = arr2.length
console.log(nn)
// how to access last element
console.log(arr2[nn - 1])

console.log(arr[100])

// Add items to array
const cars = ['Subaru']
console.log(cars)
cars[1] = 'Ford'
cars[2] = 'Volvo'
cars[3] = 'BMW'
console.log(cars)

// push to add item to the end of the array
cars.push('Lambo')
console.log(cars, cars.length)

// unshift to add item at the start of the array
cars.unshift('Maruti')
console.log(cars, cars.length)

// Remove items in the array
// shift: remove from the front
cars.shift()
console.log(cars, cars.length)

// pop : remove item from the end
cars.pop()
console.log(cars, cars.length)

// delete item at an index n
cars.splice(2, 1)
console.log(cars)

// add items at index n
cars.splice(2, 0, 'Tata', 'Mahindra')
console.log(cars)
