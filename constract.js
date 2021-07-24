var user = function(firstName,lastName) {
    this.firstName=firstName
    this.lastName=lastName
    // this.getlastName=function() {
    //     return(`lastName ${this.lastName}`)
    // }
};

var pravi=new user("pravi","bairagi")
console.log(pravi);

var durga=new user("durga","dharwey")
console.log(durga);

var anuj=new user("anuj","rajput")
console.log(anuj);

// // function f2() {
// //     'use strict';//see strict mode
// //     return this;
// // }

// console.log(f2() === null);


// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object
// const person = new Person();
// console.log(person);



// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//         console.log('hello');
//     }
// }

// // create objects
// const person1 = new Person();
// const person2 = new Person();

// // access properties
// console.log(person1);  // John
// console.log(person2);  // John
