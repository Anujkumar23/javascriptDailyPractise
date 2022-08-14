// Function Object

// A function in javascript is a value.Every value in javascript has a type.In javascript function are object.

// The "name" property
// Function object contain some useable property.
// The function name is accessible as the "name" property.

// function sayHi(){
//     console.log("hi");
// }
// console.log(sayHi.name);

// let sayHi=function(){
//     console.log("Hi");
// };
// console.log(sayHi.name)

// // it also work if assignment is done by a default value.
// function f(sayHi=function(){

// }){
//     console.log(sayHi.name)
// }
// f();

// object method has names too:
let user={
    sayHi(){

    },

    sayBye:function(){

    }
}
console.log(user.sayHi.name);
console.log(user.sayBye.name);

// when we don't have a right name the name property is empty.
let arr=[function (){

}];
console.log(arr[0].name);


// The length property:
// There is another built in property "length" that return the number of function parameter

function f1(){

};
console.log(f1.length);
function f2(a,b){

};
console.log(f2.length);
function f3(c,d,e,f,g){

};
console.log(f3.length);


// // custom properties
// function sayHi(){
//     console.log("hi");
//      sayHi.counter++
// }
// sayHi.counter=0;
// sayHi();
// sayHi();
// console.log(`${sayHi.counter}`);


// function property can replace closure sometimes.
function makeCounter(){
    function counter(){
        return counter.count++
    }
    counter.count=0;
    return counter;
}
let counter=makeCounter();
console.log(counter());
console.log(counter());


// Named function Expression
// // Named Function Expression is a term for function expression that has a name.
// let sayHi=function func(who){
//     console.log(`hello,${who}`)

// } ;
// sayHi("john");


// There is  two special things about the name func :
// 1.It allow the to reference itself internally.
// 2.It is not visible outsid eof the function.

// let sayHi=function func(who){
//     if(who){
//         console.log(`hello,${who}`)
//     }
//     else{
//         func("Guest");
//     }
// }
// sayHi();

// let sayHi=function(who){
//     if(who){
//         console.log(`hello,${who}`);
//     }
//     else{
//         sayHi("guest");
//     }
// }
// let welcome=sayHi;
// sayHi=null;
// welcome();


// named function expression

let sayHi=function func(who){
    if(who){
        console.log(`hello,${who}`);
    }
    else{
        func("guest");
    }
}
let welcome=sayHi;
sayHi=null;
welcome();

// here it works because name func is function local. It is not taken from outside
