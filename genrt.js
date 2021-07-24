function * generatorFunction() { 
    yield 'Hello, ';
  console.log('I will be printed after the pause');  
    yield 'World!';
}
const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);