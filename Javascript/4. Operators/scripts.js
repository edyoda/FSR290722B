let x = 3
let y = 5
console.log('x + y', x + y)
console.log('x - y', x - y)
console.log('x * y', x * y)
console.log('x / y', x / y)
console.log('x % y', x % y)

x = 10
console.log('x++', x++)
console.log('x again', x)
x = 10
console.log('++x', ++x)
console.log('x again', x)

x = 10
console.log('x--', x--)
console.log('x again', x)

x = 10
console.log('--x', --x)
console.log('x again', x)

console.log(2 + 4)
console.log('abc' + 'def')
let str1 = 'abc'
console.log(str1.concat('def'))

console.log(2 - 4)
console.log('abc' - 'def')
var str2 = 'abc' * 'def'
console.log(str2)
var str2 = 'abc' / 'def'
console.log(str2)
var str2 = 'abc' % 'def'
console.log(str2)

// If x is 3, then ++x sets x to 4 and returns 4,
// whereas x++ returns 3 and, only then, sets x to 4.

var input = 7
var output1 = ++input + ++input + ++input
var output2 = input++ + input++ + input++
var output3 = input++ + ++input + input++
console.log(output1 + ' ' + output2 + ' ' + output3)
console.log(input)

let k = 5
console.log('value of k == 8: ', k == 8)
console.log('value of k == 5: ', k == 5)
console.log('value of k == "5": ', k == '5')
console.log('value of k == "50": ', k == '50')
console.log('value of k == "500": ', k == '500')

console.log('value of k === 8: ', k === 8)
console.log('value of k === 5: ', k === 5)
console.log('value of k === "5": ', k === '5')
console.log('value of k === "50": ', k === '50')
console.log('value of k === "500": ', k === '500')

console.log('value of k != 8: ', k != 8)
console.log('value of k != 5: ', k != 5)
console.log('value of k != "5": ', k != '5')
console.log('value of k != "50": ', k != '50')
console.log('value of k != "500": ', k != '500')

console.log('value of k !== 8: ', k !== 8)
console.log('value of k !== 5: ', k !== 5)
console.log('value of k !== "5": ', k !== '5')
console.log('value of k !== "50": ', k !== '50')
console.log('value of k !== "500": ', k !== '500')

console.log(15 !== '15')
console.log(15 != '15')
console.log(15 > 16)
console.log(15 >= 15)
console.log(15 >= 16)
console.log(15 < 16)
console.log(15 <= 16)
console.log(15 <= 15)

let aa = 5
let bb = 6

let value1 = aa > 3 && bb > 6
let value2 = aa > 3 || bb > 6
let value3 = !(aa > 3)
console.log(value1)
console.log(value2)
console.log(value3)

console.log(10 > 100)
console.log(!(10 > 100))

let age = 13
let voteable = age < 18 ? 'Too young' : 'Old enough'
console.log(voteable)
console.log(age !== 18 ? 'Too young' : 'Old enough')
console.log(age <= 10 ? 'Too young' : 'Old enough')
console.log(age >= 14 ? 'Too young' : 'Old enough')

console.log(typeof 200)
console.log(typeof 200.2)
console.log(typeof '200')
console.log(typeof null)
console.log(typeof NaN)
console.log(typeof undefined)

console.log(typeof typeof null)
let val = typeof null
console.log(typeof val)

const type = typeof 200
console.log(typeof type)

console.log(typeof 2 + 2)
console.log(typeof 2 + 2)

var a = 10
var b = 10
var c = 10
console.log(a, b, c)
// template string
console.log(`sdgsd \n ${a} \n ${b} \n ${c}`)
console.log(typeof true)

//Implicit Conversion
// to string
console.log(typeof ('hola' + true))
console.log(typeof (null + 'hola'))
console.log(typeof (5 + 'hola'))

// to number
console.log(typeof +'2')
console.log(typeof -'10')
console.log(typeof +'2')

//to boolean
console.log(typeof (2 >= '2'))

//practice problems
console.log(true + false)
console.log(12 / '6')
console.log('number' + 15 + 3)
console.log(15 + 3 + 'number')
console.log(1 > null)
console.log('foo' + +'bar')
console.log('true' == true)
console.log(false == 'false')
console.log(null == '')
console.log(!!'false' == !!'true')

let month = '1'

switch (month) {
  case 1:
    month == 1
    alert('January' + ' Total Days=31')
    break
  case 2:
    alert('February' + ' Total Days=28')
    break
  case 3:
    alert('March' + ' Total Days=31')
    break
  case 4:
    alert('April' + ' Total Days=30')
    break
  case 5:
    alert('May' + ' Total Days=31')
    break
  case 6:
    alert('June' + ' Total Days=30')
    break
  case 7:
    alert('July' + ' Total Days=31')
    break
  case '1':
    alert('This is one')
    break
  case 9:
    alert('September' + ' Total Days=30')
    break
  case 10:
    alert('October' + ' Total Days=31')
    break
  case 11:
    alert('November' + ' Total Days=30')
    break
  case 12:
    alert('December' + ' Total Days=31')
    break
  default:
    alert('Invalid month')
}

// implicit conversion
let valueA = 'true'
// let valueA = "0"
// let valueA = "1"
// let valueA = ""
// let valueA = NaN
// let valueA = null
// let valueA = undefined
if (valueA) {
  console.log('This is True')
} else {
  console.log('This is False')
}
