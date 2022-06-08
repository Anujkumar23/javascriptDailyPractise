"use strict"

function scope(){
     message= "hello"
    console.log(message,"variable without declaration not allwed");
}
scope();


function myFunction(){
    console.log(this, "in strict mode it print undefined")
}
myFunction();


// function param(para1,para1){
//     console.log("duplicate parameter not allowed");
// }
// param();


let public= 123;
console.log(public,"using reserve keyword");