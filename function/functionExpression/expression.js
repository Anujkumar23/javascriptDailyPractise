// function declaration
// function sayHi(){
//     console.log("hello");
// }

// // function expression
// let sayHi= function(){
//     console.log("hello")
// }

// function sayHi(){
//     console.log("hello");
// }
// let func = sayHi;
// func();
// sayHi();


// let  sayHi = function(){
//     console.log("hello");
// };
// let func = sayHi;
// func();
// sayHi();


sayHi("john");
let sayHi=function(name){
    console.log(`hello,${name}`)
}


let age= prompt("What is yor age?",18);
let welcome;
if (age<18){
    welcome=function(){
        alert("hello");
    };
}
else{
    welcome=function(){
        alert("Greeting");
    };
}

welcome();