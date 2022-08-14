// Rest Parameter and Spread Syntax
// Many JavaScript built in function support an arbitrary number of argument.
// 1. Math.max(arg1,arg2,...,argN)- return the greatest of the argument
// 2.Object.assign(dest,src1,...,srcN)-copies property from src1..N into dest.

// Rest Parameter
// A function can be called with any number of argument, no matter how it is defined.
function sum(a,b){
    return a+b;
}
console.log(sum(1,2,3,4,5));

/* Only the first two value will be counted.
The rest of the argument can be included in the function definition by using three dots ...followed by the name of the array.
... this mean "gathering the remaining argument in the array".

*/
function sumAll(...args){
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(sumAll(1,2,3));

// We can also get the first parameter as variable, and put another argument in the rest parameter.

function showName(firstName,lastName,...titles){
    console.log(firstName+''+lastName);

console.log(titles[0]);
console.log(titles[1]);
console.log(titles.length);

// The rest parameter gather the remaining argument.So it must be at the end.

}
showName("julius","Caesar","Consul","Imperator");

// The "argument" variable
// There is a special array-like Object named arguments that contain all argument by their index.

function showName(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName("julius","Caesar");
showName("Ilya");
// In old time rest parameter did not exists in the language ,So argument is the only way to get all the argument of the functiion.
// It is both array like and iterable so it's not an array.It does not support array methods.

// Arrow function do not have argument.It takes argument from the outer "normal function".
function f(){
    let showArg=()=>{
        console.log(arguments[0]);
    }
    showArg();
}
f(1);

// Spread Syntax
// Spread syntax is the reverse of the rest parameter.The rest parameter include all the remaining argument in the function definition by creating an Array.
// Spread syntax also define like rest parameter with three dots.
// It return us the list of the argument from an array.

let arr=[1,2,3];
console.log(Math.max(arr));
// Error because Math.max expect a list of numeric argument not a single array.
// When ...arr is used with the function call it expand an itable oject arr into list of argument.

 arr=[3,5,1];
 console.log(Math.max(...arr));

//  We can pass multiple itrable this way:
let arr1= [1,-2,3,4];
let arr2=[8,3,-8,1];
console.log(Math.max(...arr1,...arr2));

// Spread syntax can be used to merge Array:
arr1= [1,-2,3,4];
arr2=[8,3,-8,1];

let merged=[0,...arr,2,...arr2];
console.log(merged);

// Spread syntax also used to convert string into an array.
let str="hello"
console.log([...str]);

// Array .from works with both array like and iterable.
// spread syntax works with only iterable.

// copy an array/object

arr=[1,2,3];
let arrCopy=[...arr];

// Do the array have same content 
console.log(JSON.stringify(arr)===JSON.stringify(arrCopy));
console.log(arr===arrCopy);//false they are not referencing to same array.

// modify oyr initial array does not modify the copy.
arr.push(4)
console.log(arr);
console.log(arrCopy);

// This is shorter way to copy and object/Array than Object.assign({},obj) or Object.assign([],arr).