const pipe = (...functions) => x => functions.reduce((value, func) => func(value), x)  
const compose = (...functions) => x => functions.reduceRight((value, func) => func(value) ,x) 

const repeat = value => `${value} ${value}`
const capitalize = value => value[0].toUpperCase() + value.substring(1)
const question = value => `${value}?`

const result = question(capitalize(repeat('demo cocha')))
const resultPipe = pipe(repeat, capitalize, question)('demo cocha')
// Compose is the same as pipe, but inversed (from right to left)
const resultCompose = compose(question, capitalize, repeat)('demo cocha')

console.log(result);
console.log(resultPipe);
console.log(resultCompose);

export{ pipe, compose }