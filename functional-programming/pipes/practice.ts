import { compose, pipe } from '.'

// Data transfomation
const duplicate = (value) => 2 * value
const multiplyBy = (n) => (value) => n * value
const divideBy =  (n) => (value) => value / n


// You can intercept functions with a logger wrapper
const logger = (funct) => {
    return value =>  {
        console.log('value input:', value)
        return funct(value)
    }
}

const loggerPipe = x => {
    console.log('loggerrrrr: ', x)
    return x
}


const result = pipe(
    logger(duplicate), 
    loggerPipe,
    logger(multiplyBy(2.65)), 
    loggerPipe,
    logger(divideBy(1.25))
)(23)

console.log(result)