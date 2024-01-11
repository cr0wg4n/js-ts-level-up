import { Fold, Max, Min, Product, Sum} from './lib'

const sumOfAll = [1,2,3,4,5].reduce(Sum.concat, Sum.empty())
console.log(sumOfAll);
console.log(Product.concat(Product.empty(), 5));

const sumFold = Fold([1,2,3,4,5], Sum)
console.log(sumFold);

const maxValue = Fold([1,2,3,4,5], Max)
console.log(maxValue);


const minValue = Fold([0, 1,2,3,4,5], Min)
console.log(minValue)
