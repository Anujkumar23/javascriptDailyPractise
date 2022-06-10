if (1||0){
    console.log("truthy");
}

let hour= 9;
if(hour<10||hour>18){
    console.log("office is closed");
}

 hour =12;
let isweekend =true;

if (hour<10||hour>18||isweekend){
    console.log("The office is closed");
}

console.log(1||0)//1
console.log(null||1)//1
console.log(2||1||2)//1
console.log(null||0||1)//1
console.log(undefined||null||0)//0


let firstName=""
let lastName=""
let nickName= "SuperCoder"


console.log(firstName||lastName||nickName);


true||console.log("not Printed");
false||console.log("printed");









