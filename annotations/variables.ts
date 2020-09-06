let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]

// Classes
class Car {}

let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// Type annotations vs Type inference => recomendation: use type inferences always

// However there are cases when you need to use Type annotations

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y":20}'
const coordinates = JSON.parse(json)
console.log(coordinates)

// fixing: adding type annotation to coordinate

// const coordinates: { x: number; y: number } = JSON.parse(json)

// 2) when you declare a variable in one line and initializate it later

let words = ['red', 'green', 'blue']
let foundWord: boolean // type declaration because we are going to initialize it later

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) when the variable type cannot be infeerred

// variables whose type cannot be inferred correctly (it is a corner case)
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false // interesting!

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
