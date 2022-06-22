// let user = new Object();
// let user = {};

// literals and properties

// let user={
//     name:"john",
//     age:30
// };

// Square Bracket
// user.likes birds= true //error

// let user={

// };
// user["likes birds"]= true;

// console.log(user["likes birds"]);//true

// //delete a property
// delete user ["likes birds"];

// let key ="likes birds"
// user[key]= true;

// access property with [] square bracket
// let user= {
//     name:"john",
//     age:30
// };

// let key= prompt("what do you want to know about the user?" ,"name");

// console.log(user[key]);

// we can't access property with . operator
// let user= {
//     name:"john",
//     age:30
// };

// let key= prompt("what do you want to know about the user?" ,"name");

// console.log(user.key);


// computed property

// let fruit= prompt("which fruit to buy?","apple");

// let bag ={
//     [fruit]:4,//property name is taken from fruit
// };
// console.log(bag.apple);//4

// let fruit= prompt("which fruit to buy?","apple");

// let bag={

// };
// bag[fruit]=5;

// console.log(bag[fruit]);

// let fruit=prompt("which fruit to buy?","apple");

// let bag={
//     [fruit+'computer']:5,
// };
// console.log(bag.applecomputer)


// property value shorthand

// function makeUser(name,age){
//     return{
//         name:name,
//         age:age
//     };
// }
// let user= makeUser("john",30);
// console.log(user.name);

// we can also write like this

// function makeUser(name,age){
//     return{
//         name,
//         age,
//     };
// }
// let user= makeUser("john",30);
// console.log(user.name);

// property name
// let obj={
//     for:1,
//     let:2,
//     return:3,
// };
// console.log(obj.for + obj.let + obj.return);

// let obj={
//     0:"test",
// };

// console.log(obj[0]);
// console.log("0");

// let obj={};
// obj.__proto__=5;
// console.log(obj.__proto__);


// // property Existence
// let user={};
// console.log(user.noSuchProperty===undefined);


// let user= {name:"john",age:30};
// console.log("age" in user);
// console.log("blabla" in user);

// let obj={
//     test:undefined
// };

// console.log(obj.test)
// console.log("test" in obj);

// For..in loop
let user={
    name:"john",
    age:30,
    isAdmin:true
};

for(let key in user){
    console.log(user[key]);
    console.log(key)
}

let codes ={
    "49":"Germany",
    "41":"Switzerand",
    "44":"Great Britain",
    "1":"USA"
};
for(let code in codes){
    console.log(code);
}
 codes ={
    "+49":"Germany",
    "+41":"Switzerand",
    "+44":"Great Britain",
    "+1":"USA"
};
for(let code in codes){
    console.log(code);
}