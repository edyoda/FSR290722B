// JSON

// Some Facts to remember:
// ===> JSON is purely a string with a specified data format — it contains only properties, no methods.
// ===> JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax, but is distinct from JavaScript: most of JavaScript is not JSON.
// ===> A JSON string can be stored in its own file, which is basically just a text file with an extension of .json
// ===> Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly).
// ===> JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be valid JSON.

// Testing for valid JSON:
// https://jsonlint.com/

//------------------------------------------------------------------------
// JSON.stringify()
JSON.stringify({}) // '{}'
JSON.stringify(true) // 'true'
JSON.stringify('foo') // '"foo"'
JSON.stringify([1, 'false', false]) // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]) // '[null,null,null]'
JSON.stringify({ x: 5 }) // '{"x":5}'

// second argument of JSON.stringify()
// ====> If it is a function
function replacer(key, value) {
  // Filtering out properties
  // console.log('KV pairs', key, value)
  if (key === 'week') {
    return 7
  }
  return value
}

const foo = [
  { foundation: 'Mozilla' },
  { n: { model: 'box' } },
  { week: 45 },
  { week: 45 },
  { a: { b: { week: 45 } } },
  { week: 45 },
  { week: 45 },
  { transport: 'car' },
  { month: 7 },
]
console.log('===> replacer', JSON.stringify(foo, replacer))
// '{"week":45,"month":7}'

//====> if it is an array
const bar = {
  foundation: 'Mozilla',
  model: 'box',
  week: 45,
  transport: 'car',
  month: 7,
}

JSON.stringify(bar, ['week', 'month'])
// '{"week":45,"month":7}', only keep "week" and "month" properties

console.log('===> replacer array', JSON.stringify(foo, ['week', 'month']))
// [{},{},{"week":45},{"week":45},{},{"week":45},{"week":45},{},{"month":7}]

//-------------------------------------------------------------------------
// JSON.parse()
let obj = `{ 
  "name": "John", 
  "phone": 3453453445, 
  "isOnline": false
}`

const parsedObj = JSON.parse(obj)
console.log('===> parsedObj', parsedObj)

const newObj = JSON.parse(obj, (key, value) => {
  if (typeof value === 'number') {
    return String(value).padStart(14, '+91_')
  }
  if (typeof value === 'boolean') {
    return Number(value)
  }
  return value
})
console.log('===> newObj', newObj)

console.log('===> reviver array', JSON.parse(obj, ['phone']))
// won't filter

//-------------------------------------------------------------------------
// JSON.parse() more examples

const isValidJSON = (str) => {
  // what if you don't use try...catch block ??
  try {
    const result = JSON.parse(str)
    console.log(result)
    return true
  } catch (error) {
    console.log('"', str, '"', ' ===> ', error)
    return false
  }
}

isValidJSON('{}')
isValidJSON('[]')
isValidJSON('[')
isValidJSON('{')
isValidJSON('[{},{}]')
isValidJSON('null')
isValidJSON('undefined')
isValidJSON('NaN')
isValidJSON('true')
isValidJSON('false')
isValidJSON('')
isValidJSON('0')
isValidJSON('1.23456')
isValidJSON(`{
  name: "ABCD"
}`)
isValidJSON(`{
  "name": "ABCD",
}`)
isValidJSON(`{
  "name": "ABCD"
}`)
isValidJSON(`{
  "name": "ABCD",
   "id": 25
}`)
isValidJSON(`{
  "name": "ABCD",
   "id": "25"
}`)
isValidJSON(`{
  "name": "ABCD",
   "id": "25",
   "balance": 12000
}`)
isValidJSON(`{
  "name": "ABCD",
   "isAllowed": false,
   "isAdmin": "true"
}`)

isValidJSON(`[{
  "name": "ABCD",
   "isAllowed": false,
   "isAdmin": "true"
}, {
  "name": "EFGH",
   "isAllowed": true,
   "isAdmin": "false"
}]`)

// make string code a valid JSON
isValidJSON(`[{
  "name": "ABCD",
   "isAllowed": false,
   "isAdmin": "true"
}, {
   name: "EFGH",
   isAllowed: true,
   isAdmin: "false"
}, {
  "name": "IJKL",
   "isAllowed": false,
   "isAdmin": "false",
}]`)

// When parsing, undefined or functions will throw an error
isValidJSON(`{ "name": null }`)
isValidJSON(`{ "name": undefined }`)
isValidJSON(`{ "name": function(){console.log("FN")} }`)
isValidJSON(`undefined`)
isValidJSON(`function(){console.log("FN"`)
isValidJSON(`{ "name": null, undefined }`)
// ------------------------------------------------------------------------
// JSON.stringify() more examples
const valToStr = (value) => {
  try {
    const result = JSON.stringify(value)
    console.log('Stringify', value, '====>', result)
    return true
  } catch (error) {
    console.log('Error:', 'Stringify', value, ' ===> ', error)
    return false
  }
}

valToStr([])
valToStr({})
valToStr(NaN)
valToStr(null)
valToStr(undefined)
valToStr('')
valToStr(0)
valToStr(-1.2345)
valToStr([{}, {}])
valToStr(() => {})
valToStr({ name: 'Jason', id: 12 })
valToStr({ name: 'Jason', id: null })
valToStr([
  { name: 'Jason0', id: 23 },
  { name: 'Jason1', id: null },
])

// when converting to string, all the keys with values undefined,functions will be ignored
valToStr({ name: 'Jason', id: undefined })
valToStr({ name: 'Jason', fn: () => {} })
valToStr([
  { name: 'Jason0', id: 23 },
  { name: 'Jason1', id: undefined },
  { name: 'Jason1', fn: () => {} },
  { undefined },
  () => {},
])
valToStr([{ name: 'A', id: 1 }])
valToStr({ name: 'B', id: NaN })
valToStr({ name: 'BB', id: Infinity })
valToStr({ name: 'BBB', id: -Infinity })
valToStr({ name: 'C', id: '3' })
valToStr({ name: 'D', age: undefined })
valToStr({ age: undefined })
valToStr({ undefined })
valToStr({ fn: () => {} })
valToStr({ name: 'E', bool: true })
valToStr({ name: 'F', bool: 'false' })
valToStr([undefined, Infinity, NaN, () => {}])
valToStr([
  { name: 'Jason0', id: 23 },
  { name: 'Jason1', id: undefined },
  { name: 'Jason1', fn: () => {} },
  { undefined },
  undefined,
  () => {},
  function () {},
  NaN,
  Infinity,
])
