// The function sayHi uses an external variable name.When the function runs,which vlue is going to use.
// let name="john";
// function sayHi(){
//     console.log("Hi, " + name);
// }

// name="Pete";
// sayHi();


// The function makeWorker below makes another function and return it. That new function can be called from somewhere else.
function makeWorker(){
    let name="pete";
    return function(){
        console.log(name);
    };
}
let name= "john";
let work=makeWorker();
work();

// Here we make two counter:counter and counter2 using the same makeCounter function.


// function makeCounter(){
//     let count=0;
    
//     return function(){
//         return count++;
//     }

// }
// let counter= makeCounter();
// let counter2=makeCounter();

// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());

// Here a counter object is made with the help of the constructor function.

function Counter(){
    let count=0;

    this.up=function(){
        return ++count;
    }
    this.down=function(){
        return --count;
    };
}
 let counter= new Counter();
 console.log(counter.up());
 console.log(counter.up());
 console.log(counter.down());

// result of the last line

let phrase= "Hello";
if(true){
    let user="John";
    function sayHi(){
    console.log(`${phrase},${user}`);
}
sayHi();
}
sayHi();// it will give an error because we are calling sayHi()outside the scope of  if
