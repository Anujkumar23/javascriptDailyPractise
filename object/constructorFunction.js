// constructor function are like regular function but the difference is that it define with a capital letter and is executed with "new" operator.

// function User(name){
//     this.name=name;
//     this.isAdmin=false;
// }
// let user= new User("jack");

// console.log(user.name);
// console.log(user.isAdmin);

// function User(){
//     alert(new.target)
// }

// User();

// new User();


// we can also make both  new and regular call to do the same

// function User(name){
//     if(!new.target){
//         return new User(name);
//     }
//     this.name=name;

// }
// let john= User("john")
// console.log(john.name);


// Constructor do not have return statement .The task of constructor is to write all stuff in this ,and it become the result.
// But if there is a return statement
// 1.if return is called with an object ,then object is return instead of this.
// 2. if return is called with a primitive it's ignored.

// function BigUSer(){
//     this.name= "john";
//     return {name:"Godzilla"}
// }
// console.log(new BigUSer().name);

// // empty return
// function SmallUser(){
//     this.name="john";
//     return;
// }
// console.log(new SmallUser().name);

// // omitting prantheses
// let user= new USer;
// user= new User();

// Method in constructor
function User(name){
    this.name=name;

    this.sayHi=function(){
        console.log("My name is:" +this.name);
    };
}


let john= new User("john");
john.sayHi();
john.name