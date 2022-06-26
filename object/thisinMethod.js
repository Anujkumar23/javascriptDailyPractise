// let user={
//     name:"john",
//     age:30
// };

// user.sayHi=function(){
//     console.log("hello!");
// };

// user.sayHi();

// // we could use predeclare function as  a method

// let user={
//     name:"john",
//     age:30
// };

// function sayHi(){
//     console.log("hello!");
// }
// user.sayHi=sayHi;

// user.sayHi();


// // Method shorthand
// user={
//     sayHi:function(){
//         console.log("hello");
//     }
// }

// user={
//     sayHi(){
//         console.lpg("hello");
//     }
// }

// To access an object a method can use the this keyword

// let user={
//     name:"john",
//     age:30,

//     sayHi(){
//         console.log(this.name);
//     }

// }
// user.sayHi();

// if we decide to copy user to another variable admin=user and overwrite user withsomething else then it will access the wrong onject.

// let user= {
//     name:"john",
//     age:30,
//     sayHi(){
//         console.log(user.name)
//     }
// }
// let admin= user;
//   user= null;
//  console.log( admin.sayHi());

//  this is not bound

// let user={name:"john"};
// let admin={name:"Admin"};

// function sayHi(){
//     console.log(this.name)
// }

// user.f=sayHi;
// admin.f=sayHi;

// user.f();
// admin.f();


// callingg function without an object

// function sayHi(){
//     console.log(this);

// }
// sayHi();
let obj={
    name:"john",
sayHi(){
let arrow=()=>{
    console.log(this.name);
}
arrow();
}
};
obj.sayHi();