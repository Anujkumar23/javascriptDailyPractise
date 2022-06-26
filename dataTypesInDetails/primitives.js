let john={
    name:"john",
    sayHi:function(){
        console.log("Hi buddy!");
    }
};
john.sayHi();
//here sayHi is a method og john object.


// primitive as an object

let str= "hello";
console.log(str.toUpperCase());
// Here str is a premitive type.When we will access its property a special object is created that know the value of the sring and a method .touppercase().
// the method run and return a new string in upperCase.


console.log(typeof 0);
console.log(typeof new Number(0));//object 

let zero = new Nummber(0);
if (zero){ //object are always truthy in if
console.log("zero is truthy")
}