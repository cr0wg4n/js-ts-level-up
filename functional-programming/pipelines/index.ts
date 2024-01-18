const pipe = (...funcs) => x => funcs.reduce((v, f) => f(v), x)
const repeat = value => `${value} ${value}`
const capitalize = value => value[0].toUpperCase() + value.substring(1)
const question = value => `${value}?`

const result = question(capitalize(repeat('demo cocha')))
const result2 = pipe(repeat, capitalize, question)('demo cocha')

console.log(result);
console.log(result2);
