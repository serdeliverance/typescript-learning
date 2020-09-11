const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// declaring a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40]

// pepsi[0] = 44 // compilation error because the type is a string

// type alias
type Drink = [string, boolean, number]

const coca: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 50]

// typescript goodies

// tuples, type alias
