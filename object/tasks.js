// Create an empty object user
// let user={};

// Add the property name with the value John.
// Add the property surname with a value smith.
let user={
    name:"john",
    surname:"smith"
}
// Change the value of name to pete
user.name= "pete"
console.log(user.name)

// Remove the property name from object.
delete user.name
console.log(user.name)


// Write a function isEmpty(obj) which  return true if the object has no properties,false otherwise
let obj={
    // name:"anuj"
};
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
console.log(isEmpty(obj));


// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.If salaries is empty, then the result must be 0.

let salaries={
    john:100,
    Ann:160,
    pete:130
}

let sum= 0;
for(let key in salaries){
    sum= sum+salaries[key];
}
console.log(sum);


// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
    for(let key in obj){
        if (typeof obj[key]==="number"){
            obj[key]*= 2;
        }
        // return obj[key];
    }
}

multiplyNumeric(menu);

console.log(menu.width)