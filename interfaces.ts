// why interfaces?

// having an object with lots of attributes

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
}

// and a method which uses these object
const printVehicle_legacy = (vehicle: {
  name: string
  year: number
  broken: boolean
}): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}

// the method above have Long Type Annotations as we can see. Which is a problem

printVehicle_legacy(oldCivic)

// what if we want to define more methods that uses the same object? we would have to
// repeat the same horrible type annotation all the time. A part of that, it is easy to
// make mistakes

// lets creating an interface

interface Vehicle {
  name: string
  year: number
  broken: boolean
}

// now, using Interfaces
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken? ${vehicle.broken}`)
}

printVehicle(oldCivic) // what typescript does is check if the oldcivic satifies the interface
// it checks that all oldCivic properties matches the names and types defined in the interface
// in that way... an interface is like a contract
