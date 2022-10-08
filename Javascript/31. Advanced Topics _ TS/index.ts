let names: string[] = []
// names.push(100)
names.push('Dylan')

const car: { type: string; model: string; year: number } = {
  type: 'Toyota',
  model: 'Corolla',
  year: 2009,
}

// car.type = 100
car.type = 'Honda'

const car: { type: string; mileage?: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: 'Toyota',
}
car.mileage = 2000

enum CardinalDirections {
  a = 'North',
  b = 'East',
  c = 'South',
  d = 'West',
}
let direction = CardinalDirections.a

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear
  type: CarType
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = 'Toyota'
const carModel: CarModel = 'Corolla'
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
}

// Another example:
type User = {
  name: string
  id?: number
  isOnline?: boolean
}

const user1: User = {
  name: 'ABC',
}

const user2: User = {
  name: 'XYZ',
  id: 2948345,
}

const user3: User = {
  name: 'XYZ',
  id: 2948345,
  isOnline: false,
}

// interface

interface Rectangle {
  height: number
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 30,
}

// interface extension

interface Rectangle {
  height: number
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: 'red',
}

interface Square {
  width: number
  height?: number
}

const square1: Square = {
  width: 100,
}

let userName: string | number

userName = 'sjehfsjehvf'
userName = 953549
// userName = []
// userName = {}

let data: string | number | boolean
data = 'sgstset'
data = 1328472
data = false
// data =[]
// data ={}

// function
// return type
function getNumber(): number {
  return 'adfkba'
}
function getNumber1(): number {
  return []
}
function getNumber2(): number {
  return 28734
}
function getNumber3(): number {
  console.log('akas')
}

// when you don't want to return anything
function printHello(): void {
  console.log('Hello!')
}
function printHello1(): void {
  console.log('Hello!')
  return 0
}

// parameters
function multiply(a: number, b: number) {
  return a * b
}

multiply('sedfsd', 87)
multiply(100, 'ltjgrlkt')
multiply('dkftgnerj', 'ltjgrlkt')
multiply(345, 345)

function printArray(a: string[] | number[]): void {
  a.forEach((item: string | number) => console.log(item))
}

const printString = (data: string): string[] | void => {
  return data.split('')
}

function addNumbers(a: number, b: number, c?: number) {
  return a + b + c
}
addNumbers(1, 2, 3)
addNumbers(1, 2)
addNumbers(1)

const multiplyNumbers = (
  a: number = 1,
  b: number = 1,
  c: number = 1
): number => {
  return a * b * c
}

multiplyNumbers(10, 10, 10)
multiplyNumbers(10, 10)
multiplyNumbers(10)
