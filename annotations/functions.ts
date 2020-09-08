const add = (a: number, b: number): number => {
  return a + b
}

const substract = (a: number, b: number): number => {
  return a - b
}

// void
const logger = (message: string): void => {
  console.log(message)
}

// never
const throwError = (message: string): never => {
  throw new Error(message)
}

// destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'Sunny'
}

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

logWeather(todaysWeather)

// the same method but destructuring
const logWeather2 = ({
  date,
  weather
}: {
  date: Date
  weather: string
}): void => {
  console.log(date) // we descrutured the object so we are no longer need forecast.date
  console.log(weather) // idem
}

logWeather(todaysWeather)
