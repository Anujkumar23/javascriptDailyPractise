// let sum=(a,b)=>a+b;
// console.log(sum(1,2));

// single argument
let double= n=>n*2;
console.log(double(3));


// without argument
let sayHi=()=>{
    console.log("hello")
}
sayHi();


let age= prompt("what is your age",18);

let welcome=(age<18)?
   ()=>console.log("hello"):
   ()=>console.log("Greeting");

   welcome();

//    Multiline arrow function
let sum = (a,b)=>{
    let result=a+b;
    return result;
};
console.log(sum(1,2));l