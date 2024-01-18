const Sum = {
  empty: () => 0,
  concat: (x, y) => x + y
}

const Product = {
  empty: () => 1,
  concat: (x, y) => x * y 
}

const Fold = (array, monoid) => {
  let acumulation = monoid.empty();
  for (const element of array) {
    acumulation = monoid.concat(acumulation, element);
  }
  return acumulation;
}

const Max = {
  empty: () => -Infinity,
  concat: (a, b) => Math.max(a, b)
}

const Min = {
  empty: () => Infinity,
  concat: (a, b) => Math.min(a, b) 
}

const toUpperCase = x =>  x.toUpperCase() 
const exclaim = x => x.concat('!')


export {
  toUpperCase,
  exclaim,
  Fold,
  Sum,
  Product,
  Max,
  Min
}