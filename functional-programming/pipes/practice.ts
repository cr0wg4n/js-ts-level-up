// Data transfomation
const pipe = (...functions) => x => functions.reduce((value, func) => func(value), x)  
const compose = (...functions) => x => functions.reduceRight((value, func) => func(value) ,x) 

const duplicate = (value) => 2 * value
const multiplyBy = (n) => (value) => n * value


const result = pipe(duplicate, multiplyBy(2.65))(1000)
console.log(result)
