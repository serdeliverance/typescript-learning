class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError('Oops, something were wrong')
  pilot(): void {
    throw new Error()
    console.log('swish')
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target)
  console.log('Key:', key)
}

/**
 * First decorator sample
 *
 * @param target
 * @param key
 * @param desc
 */
function logErrorOld(target: any, key: string, desc: PropertyDescriptor): void {
  let method = desc.value

  desc.value = function() {
    try {
      method()
    } catch (e) {
      console.log('a problem with boat')
    }
  }
}

/**
 * Decorator factory sample
 */
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    let method = desc.value

    desc.value = function() {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot()
