const pipe = (...funcs) => x => funcs.reduce((v, f) => f(v), x)
const compose = (...funcs) => x => funcs.reduceRight((v, f) => f(v), x)

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

