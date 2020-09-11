const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}

// destructuring
const { age } = profile

const {
  coords: { lat, lng }
} = profile
