// First:
// it just looks like a regular function expression but have arrow (=>) key.

const double = (value) => {
    return value * 2
}
console.log(double(10)); 

// Second:
// Omit the return keyword

const double2 = value => value * 2;
var x = double2(10);
console.log(x);


// Third:
// If our function have no parameter

var noise = () => console.log("Pling");
noise() ; 


const noise2 = _ => console.log("Pling");
noise2(); 

// Fourth:
// If we have two or more parameter, you can must be used parenthesis
const addAll = (x, y, z) => x + y + z;

var x = addAll(10, 20, 30); 
console.log(x);


// Fifth:
// We can use default value in our parameters
const multiply = (a = 2, b = 3, c = 1) => a * b * c;
multiply(2, 2, 2); 
multiply(2, 2);    
multiply(3);       
multiply(); 
var d = multiply();
console.log(d);


function returnOnlyOnce(){
    console.log("Hello");
    return "Goodbye";
}
var x = returnOnlyOnce();
console.log(x);