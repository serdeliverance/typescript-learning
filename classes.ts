class Vehicle {
  color: string

  constructor(color: string) {
    this.color = color
  }

  drive(): void {
    console.log('driving...')
  }

  honk(): void {
    console.log('bump!')
  }
}

const vehicle = new Vehicle('red')
vehicle.drive()

// inheritance
class Car extends Vehicle {}

// modifiers

// public

// private: only accessable inside the class.

// protected: can only be accessed inside the class or by subclass.

// syntactic sugar for constructors

class Vehicle2 {
  constructor(public color: string) {}

  drive(): void {
    console.log('driving...')
  }

  honk(): void {
    console.log('bump!')
  }
}
