// Destructuring Assignment
// Object allow us to create a single entity that store data item by key.
// Arrays allow us to gather data items into an ordered list.

// Destructuring assignment is a special syntax that allow us to "unpack" arrays or object into a bunch of variables.
// Destructuring also work with  complex function that have a lot of parameter,default value and so on.

// Array Destructuring
let arr = ["john", "smith"];
// destructuring assignment
let [firstName, surName] = arr;
console.log(firstName);
console.log(surName);

// We can work with variable instead of array member;
[firstName, surName] = "john smith".split(" ");
console.log(firstName);
console.log(surName);

//  "Destructing does not mean ""destructive"
// It is called destructuring assignment, because it "destructurizes" by coping the items into variables.But the array is not modified.
// firstName=arr[0];
// surName=arr[0];

// Ignore element using commas
//  [firstName, ,title]=["julius","Caesar","Consul","of the Roman Republic"];
//  console.log(title);
//  In this code  second element of the array is skipped , the third one is assigned to the title and rest of the element is skipped.

// Work with any itrable on the right side
// we can use it with any iterable not only array.
let [a, b, c] = "abc";
console.log(a);
console.log(b);
console.log(c);

let [one, two, three] = new Set([1, 2, 3]);
console.log(one);
console.log(two);
console.log(three);

// Assign to anything at the left side
let user = {};
[user.name, user.surName] = "john Smith".split(" ");
console.log(user.name);
console.log(user.surName);

// looping with .entries()
// With the object.entries() we loop over keys-and- values of an object in destructuring.

user = {
  name: "john",
  age: 30,
};
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`);
}

// Similar code for map
user = new Map();
user.set("name", "john");
user.set("age", 30);

for (let [key, value] of user.entries()) {
  console.log(`${key}:${value}`);
}
// map and map.entries() works like same.

// Swap Variable trick
// We can swap value of two variables using a destructuring assignment

let guest = "jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
console.log(guest);

// The rest...
// If the array is longer then the list at left,the extra item are skipped.
let [name1, name2] = ["julius", "Caesar", "Consul", "of the Roman Repubic"];
console.log(name1);
console.log(name2);

// If we want to get the rest of the item we cana add one more parameter "the rest" using three dots "..."
[name1, name2, ...rest] = [
  "julius",
  "Caesar",
  "Consul",
  "of the Roman Repubic",
];
console.log(name1);
console.log(name2);
console.log(rest[0]);
console.log(rest[1]);

// The value of rest is the array of the remaining array elements.
// We can also use another name in place of rest .BUt it should have three dots.

// [name1,name2,...title]=["julius","Caesar","Consul","of the Roman Repubic"];
// console.log(title[0]);

// Default values
// If the arr is shorter than the list of variable at the left,there will be no error ,the value is considered absent.
[name1 = "guest", surName = "Anonmous"] = ["julius"];
console.log(name1);
console.log(surName);
//  Default value are evaluated only if the value is not provided.

// here using prompt function for two default:
[name1 = prompt("name?"), surName = prompt("surName")] = ["julius"];
console.log(name1);
console.log(surName);

// Object  destructuring
/*The destructuring assignment also works with objects.
syntax:
let{var1,var2}={var1...var2}
*/
// let option={
//     title:"Menu",
//     width:100,
//     height:200,
// };
// let {title,width,height}=option;
// console.log(title);
// console.log(width);
// console.log(height);

let { width, height, title } = { title: "Menu", height: 200, width: 100 };
console.log(title);
console.log(width);
console.log(height);

//  If we want to assign a property to a variable with another name,like,make option.width into the variavle name w we can set variable name with colon

// option = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };
// let { width:w, height:h, title:t } = option;
// console.log(w);
// console.log(t);
// console.log(h);

//   For missing properties we can set default values using "=",
let option = {
  title: "Menu",
};
({ width = 100, height = 200, title } = option);

// prompt ask for width not for title:
let options={
    title:"Menu"
};
({width=prompt("width"),title=prompt("title"),}=option);
console.log(title);
console.log(width);

 options={
    title:"Menu"
};
// we can combine both colon and equality
({width:w=100,height:h=200,title}=option);
console.log(w)
console.log(title);


// If we have a complex object with  many proeprty
options={
    title:"Menu",
    width:100,
    height:200
};
 ({title}=option);
//  ...rest Pattern
// Here also we use rest pattern if object have more properties then the variable.
options={
    title:"Menu",
    width:100,
    height:200
};
 ({title,...rest}=options);
 console.log(rest.height);
 console.log(rest.width);

//  Gotcha if there is no let
// There is an error if we use existing variable without let.
// This is because JavaScript treat{...} in the main code(not in expression) as a code block.
// Code block is used to group statements.
// {
// let message="Hello";
// console.log(message)
// }
// // javascript treact this as a code block,thats why there is an error.
// // To sho this is not a code block we wrap the expression inside (..) paranthesis.
// ({title,width,height}=options);


// Nested destructuring
// If an object or array contain another nested array,we can use more complex left-side pattern
let opt={
    size:{wid:100,
    hgt:200
    },
    items:["cake","Donut"],
    extra:true
};

 let{size:{wid,hgt},items:[item1,item2],tlt="Menu"}=options;
 console.log(tlt)
 console.log(wid)
 console.log(hgt)
 console.log(item1)
 console.log(item2)

//  Smart Function ParaMeter
// We can pass parameter as an object and function immediately destructuring them into variable.

options={
    title:"My menu",
    items:["item1","item2"],
};

function showMenu({title="untitled",width=200,height=100,items=[]}){
    console.log(`${title}${width}${height}`);
    alert(items)

}
console.log(showMenu(options));

// If we want all value bu default we call function like this.
showMenu({});
// showMenu() this will give an error.