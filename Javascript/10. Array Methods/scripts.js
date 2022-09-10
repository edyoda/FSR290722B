// Update/Delete Element(s)
// update
let aa = [1, 2, 3, 4, 5]
aa[2] = 33
aa[aa.length - 1] = 55

// delete
delete aa[2] // length still will be 5 !!

// delete the whole array:
aa.length = 0

// forEach => allows to run a function for every element of the array.

function isPositive0(i) {
  if (i > 0) {
    console.log('Positive')
  } else {
    console.log('Negative or Zero')
  }
}

const isPositive1 = function (i) {
  if (i > 0) {
    console.log('Positive')
  } else {
    console.log('Negative or Zero')
  }
}

const isPositive2 = (i) => {
  i > 0 ? console.log('Positive') : console.log('Negative or Zero')
}

const arr = [1, -2, 3, -4, 5]
console.log('=====> forEach: ')
arr.forEach(isPositive0)
console.log('=====> forEach: ')
arr.forEach(isPositive1)
console.log('=====> forEach: ')
arr.forEach(isPositive2)

// map

console.log('=====> map: ')
let boolArr0 = arr.map((item) => item > 0)
console.log(boolArr0)
let numArr0 = arr.map((item) => (item > 0 ? 1 : 0))
console.log(numArr0)
let strArr0 = arr.map((item) => (item > 0 ? 'Yes' : 'No'))
console.log(strArr0)

console.log(arr.map((item) => item * 2))
console.log(arr.map((item) => item * item))
console.log(arr.map((item) => item + 100))

// map an array using forEach
let newArr = []
arr.forEach((item) => newArr.push(item * 2))
console.log(newArr)

newArr = []
arr.forEach((item) => newArr.push(item * item))
console.log(newArr)

newArr = []
arr.forEach((item) => newArr.push(item + 1000))
console.log(newArr)

// map an array using Array.from
console.log(Array.from(arr, (item) => item * 200))

// filter => to filter out certain elements based on some condition
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
]

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3)
console.log(someUsers)

// sort => to sort an array elements in ascending or descending order

let s0 = [9, 3, 5, 8, 7, 5, 6, 2, 0, 1]
let s1 = [
  { id: 9, name: 'a' },
  { id: 1, name: 'z' },
  { id: 13, name: 'd' },
  { id: 0, name: 'q' },
  { id: 4, name: 'l' },
]
console.log(s0.sort()) // default : // Ascending order
console.log(s0.sort((a, b) => a - b)) // Ascending order
console.log(s0.sort((a, b) => b - a)) // Descending order
console.log(s1.sort((a, b) => a.name - b.name)) // Ascending order
console.log(s1.sort((a, b) => b.id - a.id)) // Descending order

// slice => It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative
let t = [11, 22, 33, 44]

console.log(t.slice(1, 3))
console.log(t.slice(0, 3))
console.log(t.slice(3))
console.log(t.slice(-3))
console.log(t.slice(-1, -3))

// splice => arr.splice(start, deleteCount, elem1, ..., elemN)
// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

let arr3 = ['I', 'study', 'JavaScript', 'right', 'now']
console.log('original arr3:', arr3)
// remove 3 first elements and replace them with another
arr3.splice(0, 3, "Let's", 'dance')
console.log('modified arr3 after splice:', arr3)

// from index 2
// delete 0
// then insert "complex" and "language"
arr3.splice(2, 0, 'complex', 'language')
console.log('modified arr3 after splice:', arr3)

// negative index in splice
let nums = [1, 2, 5]

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
nums.splice(-1, 0, 3, 4)
console.log('modified nums after splice:', nums)

// reverse

let r = [1, 2, 3, 4, 5, 6]

console.log(r)
console.log(r.reverse())

// join => reverse of split

let names = ['Bilbo', 'Gandalf', 'Nazgul']

let str = names.join(',')
console.log(str)

console.log([1, 2, 3, 4, 5].join(''))
console.log([1, 2, 3, 4, 5].join(','))
console.log([1, 2, 3, 4, 5].join(' '))
console.log([1, 2, 3, 4, 5].join('*-*'))

// toString
const array1 = [1, 2, 'a', '1a']

console.log(array1.toString())

// indexOf /lastIndexOf

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
let i = [1, 2, 3, 'a', false, 3, 2, false, 1, 1]

console.log(i.indexOf(1))
console.log(i.indexOf(1, 2))
console.log(i.indexOf(null))
console.log(i.lastIndexOf(1))
console.log(i.lastIndexOf(false))

// includes
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
let p = [1, 2, 3, 'a', false, 3, 2, false, 1, 1]
console.log(p.includes(1))
console.log(p.includes(-p.length))

// find

let users0 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
]

let user0 = users0.find((item) => item.id == 1)

console.log(user0)
console.log([1, 2, 3, 4, 5].find((i) => i === 4))

// findIndex
let user1 = users0.findIndex((item) => item.id == 2)
console.log('index:', user1)

// find  a sum of all the elements
const myArr11 = [1, 2, 3, 4, 5]

let sum = 0
myArr11.forEach((i) => (sum += i))
console.log('sum:', sum)
// sum+=2 => sum = sum + 2

// reduce

console.log(
  'sum:',
  myArr11.reduce((sum, i) => sum + i, 0)
)
