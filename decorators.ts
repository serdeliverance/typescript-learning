class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError
  pilot(): void {
    throw new Error()
    console.log('swish')
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target)
  console.log('Key:', key)
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  let method = desc.value

  desc.value = function() {
    try {
      method()
    } catch (e) {
      console.log('a problem with boat')
    }
  }
}

new Boat().pilot()
