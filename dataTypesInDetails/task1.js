//1. Sum Number from the visitor
let num1= +prompt("Enter first Number");
let num2= +prompt("Enter Second Number");

let result=num1+num2;
alert(`sum:`+ result);


// Repeat until input is a number

function repeatNumber(){
    let num;
    do{
         num= prompt("Enter a Number","");
    }
    while(!isFinite(num)){
      if(num===null||num===""){
        return null;
      }
      else{
        return +num;
      }
   
}
}
console.log(repeatNumber());



