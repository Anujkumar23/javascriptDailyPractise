// The old "var"

/* var declaration is similar to let.
var is similar to let but there are some difference 

*/

// Var has no block scope
// variable declared with var are either function scope or global scope.

if(true){
    var test=true;
    console.log(test);
}
console.log("ouside the block scope"+test);
// var ignore code block.
// if we use let test instead of var test,then the variable would be visible inside if:

for(var i=0;i<10;i++){
    var one=1;

}
console.log(i);
console.log(one);

// var tolerate redecalrations
// if we declare the same variable with let twice in the same scope there is an error.
// let user;
// let user;

// but with var we can declare the same variable any number off times.
var user="pete";
var user="john";
console.log(user);

// var variable can be declared below their use.

function sayHi(){
    phrase="hello";
    console.log(phrase);
    var phrase;
}
sayHi();

// we can also write like this

function sayHi(){
    phrase="hello";

if(false){
    var phrase;
}
console.log(phrase);
}
sayHi();


// Declaration are hoisted but assignment are not
function sayHi(){
    console.log(phrase);
    var phrase="hello";
}
sayHi();
// The declaration is processed at the start of the function execution but assignment always work at place where it is defined.

function syaHi(){
    var phrase;
    console.log(phrase);
    phrase="Hello";
}
sayHi();


// IIFE:-Immediate invoke function expression
(function(){
    var message="hello";
    console.log(message);
})();





