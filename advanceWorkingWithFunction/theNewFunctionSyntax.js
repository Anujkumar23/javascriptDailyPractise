// The "new Function syntax"
// There is one more way to create a function.It rarely used,but sometime there is no alternative.

// let func= new function([arg1,arg2,....argN],functionBody)
// The function is created with the arguments arg1...argN and the given functionality.

// let sum=new Function('a','b','return a+b');
// console.log(sum(1,2));

// Function without argument

let sayHi=new Function('console.log("hello")')
sayHi();

// The new Function allow us to turn any string into a function .We can receive a new function from a server and then execute it.
// let str= receive the code from a server dynamically
let func=new Function(str);
func();


// closure
// A function remember where it was born in a special property[[Environment]].It reference the lexical Environment where it is created.

// But when a function is created using a new Function ,its [[Environment]] is set to a reference not hte current lexical Environment,but the global one.
// So such function doesn't have access to outer variable ,only the global one.

function getFunc(){
    let value="test";
    let func=new Function('console.log(value)')
    return func;
}
getFunc()();


// Before javascript is published to production, it's compressed using a minifier -a special program that shrink code by removing extra comments, space, rename local variable into shorter ones.
// If a function has let userName,minifier replace it.

// with let a and does it everywhere.THe variable is local and nothing outside the function can access  it,minifier are smart they analyse the code ,so they don't break anything.
// If new Function had access to outer variable, it would have problems with minifiers.
// To pass something to a function,created as new function,we should use its argument.