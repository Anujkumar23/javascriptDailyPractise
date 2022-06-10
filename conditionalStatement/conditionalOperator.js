// let accessAllowed;
// let age= prompt("how old are you?","");

// if(age>=18){
//     accessAllowed= true;

// }
// else{
//     accessAllowed=false;

// }
// console.log(accessAllowed);



// let accessAllowed = (age>18)?true:false;

//we can also write like this
// let  accessAllowed= age>18?true:false;




let age =prompt("age?",18);

let message = (age<3)?"hello baby":
(age<18)? "hello":
(age==18)?"hii!":
(age<50)?"Greetings":
"what an unusual age"

console.log(message);




let company= prompt("which company created Javascript?","");
company=="netscape"? console.log("right"):console.log("wrong")