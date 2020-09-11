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

// we can even have functions inside an inteface...

interface Vehicle2 {
  name: string
  year: number
  broken: boolean
  summary(): string // <------ a function
}

const oldCivic2 = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

interface Reportable {
  summary(): string
}

const anotherDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

// interfaces allows different objects to interact with functions that we define as long as
// those objects satifies the interface. So, interfaces don't care if the object has more
// properties, it only wants that objects satifies the properties that it defines.

// interfaces allow us to define more generic functions. The point of interfaces is making more reusable code.

// General strategy for Reusable Code in TS:

// * create functions that accept arguments that are typed with interfaces

// * objects/classes can decide to 'implement' a given interfaces to work with a function
