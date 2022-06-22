// function showMessage(){
//     console.log("Hello everyone!");
// }
// showMessage();

// Inner variable
// function showMessage(){
//     let message = "hello"
//     console.log(message);
// }
// showMessage();
// console.log(message);//error because we cannot access variable outside of loop.

// outer variable
// let userName='john';

// function showMessage(){
//     let message ='Hello,'+ userName;
//     console.log(message);
// }
// showMessage();

// let userName='john';
// function showMessage(){
//     userName="Bob";
//     let message="Hello,"+userName;
//     console.log(message);
// }
// console.log(userName);
// showMessage();
// console.log(userName);


// shadowing of variable
let userName= "john"
function showMessage(){
    let userName= "bob";
    let message ="Hello,"+ userName;
    console.log(message);
    

}
showMessage();
console.log(userName);


// Prameters in function
function showMessage(from,text){
    console.log(from,text);
}
showMessage("Ann","hello");


function  showMessage(from,text="no text given"){
    console.log(from + " " + text);

}
showMessage("Ann");


// Alternative default parameter

function showMessage(text){
    if(text===undefined){
        text="empty message"
    }
    console.log(text)
}
showMessage();

function showCount(count){
    console.log(count??"unknown");
}
showCount(0)
showCount(null);
showCount();

// returning a function
function sum(a,b){
    return a+b
}
let result= sum(1,2);
console.log(result);


function checkAge(age){
    if(age>=18){
        return true;
    }
    else{
        return confirm('Do you have permission from your parents?');
    }
}
let age= prompt("how old are you?",18);
if(checkAge(age)){
    console.log("access granted");
}
else{
    console.log("access denied")
}