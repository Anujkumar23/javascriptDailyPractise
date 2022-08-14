// Function Binding

// Losing "this"
// When a method is passed somewhere seperately from the object-this is lost.
// let user={
//     firstName:"john",
//     sayHi(){
//         console.log(`Hello,${this.firstName}`)
//     }
// };
// setTimeout(user.sayHi,1000);
// It return us undefined because setTimeout got the function user.sayHi,seperately from  the object.

// Solution 1: a wrapper
// // use a wrapping function
//  user={
//     firstName:"john",
//     sayHi(){
//         console.log(`Hello,${this.firstName}`)
//     }
// };
// setTimeout(function(){
//     user.sayHi()
// },1000);
// Now it works because it receive user from the outer lexical environment,and then call the method normally.


// Shorter syntax
// setTimeout(()=>user.sayHi(),1000);

// user={
//     firstName:"john",
//     sayHi(){
//         console.log(`Hello,${this.firstName}`)
//     }
// };
// setTimeout(()=>user.sayHi(),1000);
// user={
//     sayHi(){
//         console.log("Another user in setTimeout")
//     }
// }

// solution2
// Function provide a built in method bind that allows to fix this.
// let boundFunc=func.bind(context);
// It return us a reusable function  with fixed this.
let user={
    firstName:"john",
};
    function func(age,profession){
        console.log(this.firstName +" "+ age +" " +profession)
    }
    let funcUser=func.bind(user);
    funcUser(22,"youtuber");

    // Lets try with object method
     user={
        firstName:"john",
        sayHi(age,profession){
            console.log(this.firstName +" "+ age +" " +profession)
        }
    };
    let sayHi=user.sayHi.bind(user,22,"youtuber")
//    sayHi(22,"youtuber");
   setTimeout(sayHi,1000);

   user={
    sayhi(){
        console.log("Another user in setTimeout");
    }
   }
// THe sayHi is a bound function ,that can be called alone or passed to setTimeout

// We have a multiplication function mul(a,b)

function mul(a,b){
    return a*b;
}

let double=mul.bind(null,2);
console.log(double(3));
console.log(double(4));
// This is called the partial functiom application.


function mul(a,b){
    return a*b;
}
let triple=mul.bind(null,3)
console.log(triple(3))
console.log(triple(4))
console.log(triple(5))