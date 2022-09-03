let year = prompt('Enter a year', -1)
// let year = Infinity
console.log('entered value is : ', year)
if (year < 2022) {
  console.log('coming from only if, year < 2022')
}

console.log('something random')

if (year < 2022) {
  console.log('coming from if , value  = true, year < 2022')
} else {
  console.log('coming from else, value  = false')
}

if (year <= 2022) {
  console.log('coming from if and else, value(year < 0) = true')
} else if (year > 2023) {
  console.log('coming from else if , value(year > 2023)  = true')
} else if (year > 2024) {
  console.log('coming from  else if, value(year > 2024)  = true')
} else if (year > 2025) {
  console.log('coming from else if, value(year > 2025)  = true')
} else if (year > 2026) {
  console.log('coming from  else if, value(year > 2026)  = true')
} else {
  console.log('coming from  else')
}

year = 2025

console.log('new value of year is :', year)
console.log('before')
if (year <= 3000) {
  console.log('year  <= 3000')
} else if (year > 3050) {
  console.log('year > 3000')
}
console.log('midway')
if (year <= 3000) {
  console.log('year  <= 3000')
} else {
  console.log('year > 3000')
}
console.log('after')

if (year <= 2022) {
  console.log('coming from if and else, value(year < 0) = true')
} else if (year > 2023) {
  console.log('coming from else if , value(year > 2023)  = true')
} else if (year > 2024) {
  console.log('coming from  else if, value(year > 2024)  = true')
} else if (year > 2025) {
  console.log('coming from else if, value(year > 2025)  = true')
} else if (year > 2026) {
  console.log('coming from  else if, value(year > 2026)  = true')
} else {
  console.log('coming from  else')
}

year = 2023
switch (year) {
  case 2023:
    console.log('2023')
    break
  case 2024:
    console.log('2024')
    break
  case 2025:
    console.log('2025')
  //break
  case 2026:
    console.log('2026')
  //break
  default:
    console.log('default case executed and the year was:', year)
}
console.log('finished')

// From Codepen
// let year;
// switch (year) {
//   case 2023:
//     console.log('2023')
//   //break
//   case 2024:
//     console.log('2024')
//   //break
//   case 2025:
//     console.log('2025')
//   //break
//   case 2026:
//     console.log('2026')
//     break
//   default:
//     console.log('default case executed and the year was:', year)
// }
// console.log('finsihed')
