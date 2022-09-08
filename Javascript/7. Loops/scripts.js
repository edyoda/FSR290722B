var a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])

let b = [34, 54, 43, 45, 56, 8, 45, 76, 34, 23, 23, 5, 23, 86, 97, 75, 54, 3]

/// replace all values 23 with 24
b[9] = 24
b[10] = 24
b[12] = 24

//while

let n = 0
let x = 0
while (n < 3) {
  n++
  x = x + n
}
console.log('x: ', x)
console.log('n: ', n)
// x += n
//  x = x + n

// x -= n
//  x = x - n

// x *= n
//  x = x * n

// x /= n
//  x = x / n

// print all characters of a name

let name1 = 'Kelvin'
//  name[0]
//  name[1]
//  name[2]

let j = 0
while (j <= 5) {
  console.log(name1[j])
  j++
}

let m = 0

while (m <= 10) {
  console.log(m)
  m++ // m = 11
}
console.log('m:', m)

let rr = 10
console.log(' while loop start')
while (rr < 5) {
  console.log(rr)
  rr++
}
console.log('while loop finished')

// for loop

//log values 0  to 10 on the console
for (let m = 0; m <= 10; m++) {
  console.log(m)
}

// print only even numbers
for (let m = 0; m <= 10; m++) {
  if (m % 2 === 0) {
    console.log(m)
  }
}
// print only odd numbers
for (let m = 0; m <= 10; m++) {
  if (m % 2 !== 0) {
    console.log(m)
  }
}

// do while : print 0 to 10
console.log(' start do while loop')
let p = 0
do {
  console.log(p)
  p++
} while (p <= 10)
console.log('finished')

console.log('p:', p)

let r = 10
console.log('do while loop start')

do {
  console.log(r)
  r++
} while (r < 5)
console.log('do while loop finished')

// r = 10
// do {
//   console.log(r)
//   r--
// } while (r >= 0)

/*
Find the sum of all the numbers from 1 to n. Where n can be any psoituve integer. For example n =3
1 + 2 + 3 = 6
Console.log(sum)
*/
let n1

let sum = 0

// loop until 12 and keep adding the iteration number to sum

// while
n1 = 3
sum = 0
while (n1 > 0) {
  sum += n1
  n1--
}
console.log('suing while sum:', sum)
// do while
n1 = 3
sum = 0
do {
  sum += n1
  n1--
} while (n1 > 0)
console.log('suing do while sum:', sum)

// for

// add all items of an array and print it
let array = [10, 20, 30, 40]
let sum1 = 0
for (let i = 0; i < array.length; i++) {
  sum1 += array[i]
  // sum1 =  sum1  + array[i]
}
console.log('sum1 :', sum1)

// pass   i   array[i]  sum1
//  1     0      10      10
//  2     1      20      30
//  3     2      30      60
//  4     3      40      100
//  5    break the loop

//  Find the name of people who are not invited to the wedding from the following list
let invitationList = [
  { name: 'Jacob', invited: true },
  { name: 'Alison', invited: false },
  { name: 'Winston', invited: true },
  { name: 'Lee', invited: false },
  { name: 'Bowry', invited: true },
  { name: 'Wan', invited: false },
  { name: 'Jovovich', invited: true },
]

let unInvited = []

for (let i = 0; i < invitationList.length; i++) {
  let currentItem = invitationList[i]
  if (currentItem.invited === false) {
    unInvited.push(currentItem.name)
  }
}
console.log(' uninvited guests:', unInvited)

// Homework problems
// Q. Add numbers from 1 to 100 until you get a sum more than or equal to 100.
let sum5 = 0
let i = 0
// while (sum5 <= 100) {
while (sum5 <= 100 && i < 100) {
  console.log('last sum: ', sum5)
  console.log(' current i :', i)
  sum5 = sum5 + i
  console.log('new sum: ', sum5)
  i++
}

//Q. Find first 20 even numbers.

// for...in
const animal = {
  type: 'Dog',
  name: 'Beuno',
  age: 2,
  isAlive: false,
}

for (key in animal) {
  console.log(key, animal[key])
}

// for....of

let nums = [1, 2, 3, 4, 5]
for (value of nums) {
  console.log(value)
}

// sum of all array items
let nums1 = [1, 2, 3, 4, 5]
let sum2 = 0
for (value of nums1) {
  sum2 = sum2 + value
}
console.log('sum:', sum2)
