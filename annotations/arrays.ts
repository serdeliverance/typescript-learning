const carMarkers = ['ford', 'toyota', 'chevy']

// when initializing an empty array is useful to add type annotations
const carMarkers2: string[] = []

// arrays with objects
const dates = [new Date(), new Date()]

// a two dimension array
const carsByMake = [['f150'], ['corolla'], ['camaro']]

// why typed arrays

// 1) help with inference when extracting values
const car = carMarkers[0]

// 2) prevent incompatible values
// carMarkers.push(100)      // typescript tell us that we are trying to push an invalid value

// 3) Help with 'map', 'foreach' and 'reduce'
carMarkers.map((car: string): string => {
  return car // because we indicate the type, typescript help us with method autocompletion
})

// Flexible types
const importantDates = [new Date(), '2030-10-10'] // this array is of type (Date | string)[]
