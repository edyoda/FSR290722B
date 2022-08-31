let name = 'kelvin'
alert('My name is XYZ')
alert(name)

let num = Infinity
isFinite(num)

console.log(5 == 5)
console.log(5 === 5)
console.log('kelvin' == 'Kelvin')
console.log('kelvin' === 'Kelvin')
console.log('kelvin' === 'kelvin')
console.log(NaN === NaN)
console.log(NaN == NaN)

console.log(0 / 0)
console.log(0 / 5)
console.log(3 * 'a')
console.log('a' * 3)
console.log('b' + 4)
console.log(4 + 'b')
console.log(5 - 'c')
console.log('c' - 5)
console.log('a' - 'a')
console.log('c' * 'a')
console.log('c' > 'b')

parseFloat('1000.10xy')
//1000.1
parseFloat('xy1000.10')
//NaN
parseFloat('1000xyz.10')
//1000

console.log("I think this will 'work'")
// I think this will 'work'

console.log('I think this will "work"')

// console.log("We are the so-called \'Vikings\' from the north.")
//We are the so-called 'Vikings' from the north.

// console.log("We are the so-called \"Vikings\"" from the north.")
//We are the so-called "Vikings" from the north.

console.log('this is a multi \n line string')
// this is a multi
//  line string
console.log('this is a multi \nline string')
// this is a multi
// line string

let s = 'my string'

s.toUpperCase()

s = ' My STRING'

s.toLowerCase()

let t0 = ' this is string 0 '

let t1 = ' this is string 1 '

let t2 = ' this is string 2 '

t0.concat(t1, t2)
// ' this is string 0  this is string 1  this is string 2 '
t2.concat(t0, t2)
// ' this is string 2  this is string 0  this is string 2 '

phone = '           aoeu8h2391329he2o 21398u293 23he2ue3 23e2 3er2 32       '
//           aoeu8h2391329he2o 21398u293 23he2ue3 23e2 3er2 32
phone.trim()
//aoeu8h2391329he2o 21398u293 23he2ue3 23e2 3er2 32//

let name1 = ' K E L V I N'

name1.charAt(3)
//'E'

let str = 'one,two,three   ,four  ,  five     ,    six'

str.split(',')
//(6) ['one', 'two', 'three   ', 'four  ', '  five     ', '    six']0: "one"1: "two"2: "three   "3: "four  "4: "  five     "5: "    six"length: 6[[Prototype]]: Array(0)
str = 'one two three four'
str.split(' ')
//(4) ['one', 'two', 'three', 'four']
