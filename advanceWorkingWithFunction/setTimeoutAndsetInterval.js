// setTimeout and setInterval

// let assumeway have declare a function and we decide to execute a function not right now but after a certain time.
// 1. setTimeout  allow us to run a function once after the interval of time.
// 2.setInterval allows us to run a function repeatedly,starting after the interval of time,then repeating continuously at that interval.

// These are not the part of Javascript but are APIs  and supported in all browser and Node.js 


// setTimeout
// let timerId=setTimeout(func|code,[delay],[arg1],[arg2]...)

// func|Code
// function or a string of code to be execute

// delay
// The delay before run, in millisecnds(1000ms=1seconds) by defalut 0.

// arg1,arg2... 
// Arguments for the function

// Example
// function sayHi(){
//     console.log("hello")
// }
// setTimeout(sayHi,3000);


// function sayHi(phrase,who){
//     console.log(phrase+" ," +who)
// }
// setTimeout(sayHi,1000,"hello","john");

// // If the first argument is String, then javascript create a funnction from It.
// setTimeout('console.log("hello")',1000);

// // But using string it is not recommended,use arrow function instead of them
// setTimeout(()=>console.log("hello"),1000);

// pass a function, but don't  run it
// some developer make a mistake by adding bracket() after the function:

// function sayHi(){
//         console.log("hello")
//     }
// // setTimeout(sayHi(),1000);

// // canceling with clearTimeout
// // With the clearTimeout we can clear the setTimeout 

// let timerId=setTimeout(sayHi,1000)
// clearTimeout(timerId);


// let timerId=setTimeout(()=>console.log("never happens"),1000)
// console.log(timerId);

// clearTimeout(timerId);
// console.log(timerId);

//SetInterval
// The setInterval method has same syntax as setTimeout:

// let timerId=setInterval(func|Code,[delay],[arg1],[arg2])

// In setInterval it run the fuction not only once,but regularly after the given interval of time.

// To stop further calls, we should call clearInterval(timerId).

// This example show the message every 2 seconds and after 5 seconds the output is stopped.

// let timerId=setInterval(()=>console.log("tick"),2000);

// setTimeout(()=>{
//     clearInterval(timerId);
//     console.log('stop')
// },5000);

// Nested setTimeout
// There is two way to running something regularly.
// One is setInterval. The other one is a nested setTimeout,

// let timerId= setTimeout(function tick(){
//     console.log('tick');
//     timerId=setTimeout(tick,2000);
// },2000);

// let delay=5000;
// let timerId=setTimeout(function request(){

//     if(true){
//         delay*=2;
//     }
//     timerId=setTimeout(request,delay);
// },delay);

// Nested setTimeout allows to set the delay between the execution more precisely than setInterval.

// let i=1;
// setinterval(function(){
//     func(i++);
// // },100);

// setTimeout(()=>console.log("world"));
// console.log("hello");
// So here first the current script will execute then the code  in setTimeout will execute.


// zero delay is not infact zero.
let start=Date.now();
let times=[];
setTimeout(function run(){
    times.push(Date.now()-start);
    if(start+100<Date.now())
    console.log(times);
    else{
        setTimeout(run)
    }
})


