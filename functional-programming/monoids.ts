import { Fold, Max, Min, Product, Sum, exclaim, toUpperCase} from './lib'

const sumOfAll = [1,2,3,4,5].reduce(Sum.concat, Sum.empty())
console.log('sum all alternative way: ', sumOfAll);
console.log('just sum:', Product.concat(Product.empty(), 5));

const sumFold = Fold([1,2,3,4,5], Sum)
console.log('sum:', sumFold);

const maxValue = Fold([1,2,3,4,5], Max)
console.log('max:', maxValue);

const maxValueAlternative = [1,2,3,4,5].reduce(Max.concat, Max.empty())
console.log('max alternative way, value:', maxValueAlternative)

const minValue = Fold([0, 1,2,3,4,5], Min)
console.log('min:', minValue)

const minValueAlternative = [0, 1,2,3,4,5].reduce(Min.concat, Min.empty())
console.log('min alternative way, value:', minValueAlternative)

const Fn = run => ({
  run,
  map: f => Fn(x => f(run(x))),
  concat: other => 
    Fn(x => run(x).concat(other.run(x)))
})

const res = Fn(toUpperCase).concat(Fn(exclaim)).run('fp sux')
console.log(res)