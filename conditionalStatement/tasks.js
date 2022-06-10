// will alert be shown

// if("0"){
//     console.log("hello");// hello
// }

/*2. Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”*/


// let answer= prompt("What is the official name of javascript","");
// let output;
// if(answer=="ECMAScript"){
//     output= "Right"
// }
// else{
//     output= "You don't know ECMAScript"
// }
// console.log(output);


/* 3.Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.*/


let number= prompt("Enter a number",0);

if (number<0){
    alert(-1);
}
 else if(number==0){
    alert(0);
}
else if(number>0)
alert(1)


// Rewrite this if using the conditional operator '?':
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let a= 5;
let b=2;
let result =(a+b<4)?"below":"over" 
console.log(result);

// Rewrite if..else using multiple ternary operators '?'.
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }


let login= prompt("login as","");

let message= (login=='Employee')?'Hello':
(login == 'Director')?'Greeting':
(login == '')?'No Login':
'';
console.log(message)