let year= 2022;

if(year===2022){
    console.log("hello world")
}


if(0){
      console.log("false")
}//code under this condition would never execute.


if(1){
    console.log("true")
}

// let age =prompt("please enter your age","18");
// if(age>=18){
//     console.log("you can vote");
// }
// else{ console.log("you can't")
// }



// let accessAllowed;

// let age= prompt("how old are you?","");

// if(age>=18){
//     accessAllowed= true;

// }
// else{
//     accessAllowed=false;

// }
// console.log(accessAllowed)




let age= prompt("age?",18)
let message;
if(age<3){
    message= "hello baby"
}

else if(age<18){
message= "hello"
}

else if(age==18){
message= "hii!"
}

else if(age<50){
    message= "Greeting"
}
else{
    message ="What an unusual age"
}
console.log(message);
