// variable scope ,Closure
// A function can be created at any moment, passed as an argument to another function, and called from totally different place of code.
// Function can access variable outside of it.

// Let/const  variable
// In js we have three ways to declare a variable: let,var,const

// .Code Block
// If a variable is declared inside a code block it is visible inside that block.

{
    let message= "Hello";
    console.log(message);

}

{
    let message="Goodbye"
    console.log(message);
}
// console.log(message);

// There would be an error without blocks.
// let  message='hello'
// console.log(message);

// let message="Goobye"
// console.log(message);

// For,if,while variable declared in{...} are also visible inside.
if(true){
    let phrase="Hello";
    console.log(phrase);
}
// console.log(phrase);

// The similar thing true for for and while:
for(let i=0;i<3;i++){
    console.log(i);
}
// console.log(i)

// Nested Function
// A function is called nested function when it is created inside another function.

function sayHiBye(firstName,lastName){
    function getFulLName(){
        return firstName+" " + lastName;

    }
    console.log("Hello",getFulLName());
    console.log("Bye",getFulLName());
}
sayHiBye("Anuj","Thakur");

// A nested function can be return as a property of object or as a result by itself.


function makeCounter(){
    let count=0;

    return function(){
        return count++;
    }
}

let counter= makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());


// Lexical environment

// 1. Variables.
/*
Every running function, code block,script as whole have a hidden associated object known as lexical Environment.

The lexical Environment consist of two part:
1. Environment Record- an object that store all local variable as its property.
2.A reference to the outer lexical environment, the one assiciated with the outer code.

A "variable" is just a property of a special internal object, Environment Record.
To get or change in variable "means" to get or change in property of the object.

*/

// let phrase="hello";
// console.log(phrase);
// This is called global Lexical Environment,associated with whole script.


// 1.When the script start the lexical environment is pre-populated with all declared variables.
//   Initially they are in "Uninitialized state" it means the JS engine knows about the variable,but it cannot be referenced until it has been declared with let.It is almost same as variable didn't exist.
// 2.The let phrase definition appear.There is no assignment yet,so its value is undefined.
// 3.phrase is assigned a value.
// 4.phrase changes the value.

// 2.Function Declaration 

// The function declaration is fully initialized.
// When a Lexical Environment is created, a function Declaration immidiately become ready to use function.
// Thats why we can use a function even before the declaration itself.

// let phrase= "hello";
// function say(){
//     console.log("hello");
// }

// The behaviour is apply only to Function Declaration, not a Function expression where we assign a variable to a function.

// 3.Inner and Outer Lexical Environment.

// When a function runs a new Lexical environment is created automatically to store all local variable and parameter of the call.

 let phrase="Hello";
 function say(name){
    console.log(`${phrase},${name}`);
 }
 say("john");

//  During the function call we have two lexical Environments the inner one (for the function call) and the outer one(global):

// The inner lexical Environment correspond to current execution of say.
// The outer Lexical Environment is the global Lexical Environment.
// The inner lexical Environment has a reference to outer lexical scope.

// When a code wants to access a variable -the inner Lexical Environment is searched first,then the outer one then the more outer one,until the global one.

// 4.Retruning a function.

function makeCounter(){
    let count=0;
    return function(){
        return count++
    };
}

let count =makeCounter();


// Closure 
// A closure is a function that rememeber its outer varibales and can access them.
// They automatically remember where they were created using a hidden [[Environment]] property ,and then their code can access outer varible.


function f(){
    let value=123;

    return function(){
        console.log(value);
    }
}
let g=f();



