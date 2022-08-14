// Transparent caching

// We have a function slow(x) and x is always return the same results.
// if the function is called  often we want to remember the result to avoid recalculation.avoid.
// But instead of adding the functionality into slow(),we will create a wrapper function ,that adds caching.

// function slow(x){
//     console.log(`called with ${x}`);
//     return x;
// }
// function cachingDecorator(func){
//     let cache=new Map();
//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x)
//         }
//         let result=func(x);
//         cache.set(x,result);
//         return result;
//     };
// }
// slow=cachingDecorator(slow);

// console.log(slow(1));
// console.log('again: '+slow(1));
// console.log(slow(2));

// using 'func.call' for the context

// let worker={
//     someMethod(){
//         return 1;
//     },
//     slow(x){
//         console.log("Called with"+x);
//         return x * this.someMethod();
//     }
// };
// function cachingDecorator(func){
//     let cache=new Map();
//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x)
//         }
//         let result=func(x);
//         cache.set(x,result);
//         return result;
//     };
// }
    
// console.log(worker.slow(1))
// worker.slow=cachingDecorator(worker.slow);
// console.log(worker.slow(2));


// There is a special built-in function method func.call(context,...args) that allows to call a function explicitly.

// func.call(context,arg1,arg2,...)
// It runs func providing the first argument as this  and next as the arguments.

var obj= {
    name:"Anuj"
};
function sayHello(){
    return "hello"+this.name
}
console.log(sayHello());

// So here we have a obj object with name property and a function called sayHello when we call this function then this in function refering to the current object which is window for this function and window object does not have name property so itts return undefined.
// if we want to call sayHello function inside  the obj we have a keyword call that is available to all the function in js
var obj= {
    name:"Anuj"
};
function sayHello(age){
    return "hello " +this.name  +  ' is '+age
}
console.log(sayHello.call(obj,22));

// another example
function sayHi(){
    return this.name;

}
    let user={
        name:"john"
    }
    let admin={
        name:"admin"
    }
console.log(sayHi.call(user))
console.log(sayHi.call(admin))

// Another Example
function say(phrase){
    console.log(this.name+' :' +phrase)
}
 user ={
    name:"john"
}
say.call(user,"hello");


// func.apply 
// func.apply aloso work same like the call method but the only difference it  takes the agument in [].
// The apply accepts only array like argument.

// Passing all argument along with the context to another function is called call forwarding.
 
function sayHi(age,profession){
    return this.name + " " +age  +" "+profession;

}
 user={
        name:"john"
    }
  
console.log(sayHi.apply(user,[22,"web developer"]));
