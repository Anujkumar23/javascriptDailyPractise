// let user={
//     name:"john"
// }

// let admin= user;

// admin.name= "pete";
// console.log(user.name);

// comparison by reference
// two object are equal only if they are the same object or they are refering to the same object.

// let a={};
// b=a;

// console.log(a==b);//both variables reference the same object.
// console.log(a===b);


// two independent empty variable
let a= {};
let b= {};
console.log(a==b);

// // cloning and merging
// let user={
//     name:"john",
//     age:30
// };

// let clone={};

// // copy user property into clone
// for(let key in user){
//     clone[key]=user[key];
// }

// console.log(clone.name)

// we  also have the method Object.assign

// let user={
//     name:"john"
// }

// let permission1= {canView:true};
// let permission2= {canEdit:true};

// Object.assign(user,permission1,permission2);

// console.log(user)


// if copied property name already exist,it gets overwritten

// let user= {
//     name:"john"
// };
// let user1= {name:"pete"};

// Object.assign(user,user1)

// console.log(user);


// Nested cloning
// let user={
//     name:"john",
//     sizes:{
//         height:182,
//         width:50
//     }
// }
// console.log(user.sizes.height);

// let clone= user;
// console.log(clone.sizes.height);

// by object.assign method

let user={
    name:"john",
    sizes:{
        height:182,
        width:50
        
    }
};
let clone=Object.assign({},user);
console.log(user.sizes===clone.sizes);

// user and clone share sizes

user.sizes.width++;
console.log(user.sizes.width);
console.log(clone.sizes.width);

//If object declared as const can be modified .we can change the property value inside the object if object is declared as const.




