// Problems related to string

// includes()
const brand = 'apple'
console.log(brand.includes('app'))

// startsWith()
brand.startsWith('ap')

const str12 = 'Saturday night plans'

console.log(str12.startsWith('Sat'))
// expected output: true

console.log(str12.startsWith('Sat', 3))

// endsWith()
brand.endsWith('le')

console.log('this is a string'.endsWith('is'))

const str1 = 'Cats are the best!'

console.log(str1.endsWith('best!'))
// expected output: true

console.log(str1.endsWith('best', 17))
// expected output: true

// indexOf()
const tagline = 'MDN - Resources for developers, by developers'
console.log(tagline.indexOf('developers'))
console.log(tagline.indexOf('x'))

const firstOccurrence = tagline.indexOf('developers')
const secondOccurrence = tagline.indexOf('developers', firstOccurrence + 1)

console.log(firstOccurrence) // 20
console.log(secondOccurrence) // 35

// slice() "+91 000-000-0000"
const browserType = 'mozilla'
console.log(browserType.slice(1, 4)) // "ozi"
console.log(browserType.slice(2)) // "zilla"
console.log('abcdefg'.slice(-4, -1))
console.log('abcdefg'.slice(-3))
// updating a string

// replace()
const browserType0 = 'mozilla'
const updated = browserType0.replace('moz', 'van')

console.log(updated) // "vanilla"
console.log(browserType0) // "mozilla"

let a = 'sdf sdf s'
console.log(a.replace('sdf', 'abc'))

// how to mutate ?
let browserType1 = 'mozilla'
browserType1 = browserType1.replace('moz', 'van')

console.log(browserType1) // "vanilla"

// replaceAll()

let quote = 'To be or not to be'
quote = quote.replaceAll('be', 'code')

console.log(quote) // "To code or not to code"

// remove whitespace from a string

const str11 = '   string with whitespaces   '
console.log(str11.trim())
console.log(str11.trimStart())
console.log(str11.trimEnd())

// what if you want ot remove all the whitespace
console.log('   abc def   '.replaceAll(' ', ''))

// split a string

const myFavFood = 'tacos'

// using split() method
const favFood0 = myFavFood.split('')
console.log(favFood0)

console.log('ab0cd0ef0gh'.split('0'))
console.log('ab cd ef gh'.split(' '))
console.log('ab,cd,ef,gh'.split(','))

// using array spread
const favFood1 = [...myFavFood]
console.log(favFood1)

// using Array.from
const favFood2 = Array.from(myFavFood)
console.log(favFood2)

//convert string into a number using + operator

const str = '100'
const num = 5

console.log('str :', str)
console.log('+str:', +str)

// string will be concatentated in this case
console.log(str + num) // 1005

// in this case actual sum will be calculated
console.log(+str + num) // 105
