// Array Methods

// To Add/Remove items
/* arr.push(...)- adds item to  the end.
arr.pop()-it extract item to the  end
arr.shift()-extract an item from the beginning .
arr.unshift(...items)- adds items to the beginning

*/

// 1.splice method
// With splice method we can add and remove element from the array.
/* It return the array of removed element.
 It take  argument start, deletecount and elemtN.
 Negative indexes are allowed in the array method.The position of element start from the end of the array.
 */
// arr.splice(start,[deleteCount,elem1,elemN])

let arr=["I","study","javascript"];

arr.splice(1,1);
console.log(arr.splice)
console.log(arr);
// In this example  splice method  will start from index 1 and remove 1 element from the array.


arr= ["I","study","JavaScript","right","now"];
arr.splice (0,3,"let's","dance");
console.log(arr);

arr= ["I","study","JavaScript ","right","now"];
let removed =arr.splice(0,2);
console.log(removed);


// We can also add new element in the array without any removals.For that the value of deleteCount is 0.
arr= ["I","study","JavaScript"];
let insertElem=arr.splice(2,0,"complex","language");
console.log(insertElem);
console.log(arr);

// Negative indexes
 arr= [1,2,5]
 arr.splice(-1,0,3,4)
 console.log(arr);
 arr=[1,2,5]
 arr.splice(2,0,3,4)
 console.log(arr);

//2.slice  
/*This method is simpler then splice method
In array it copy all item from start to end (not including end) and return us new array.
Both start and end can be negative , in that case position will start from the end of the array.
arr.slice is similar to str.slice but instead of substring it make  subarray.
It does not change the original arrray.*/
// arr.slice([start],[end])

arr= ["t","e","s","t"];
console.log(arr.slice(1,3));
console.log(arr.slice(-2));
console.log(arr)


// We can also call it without argument arr.slice() it make a copy of the original array
arr= [1,2,3]
copyArr=arr.slice();
console.log(copyArr);

// concat
// The method arr.concat creates a new array and that takes values from other arrays and additional item.

arr= [1,3,5];
// new array from arr and value from other array
console.log(arr.concat([3,4]));
// new array from arr and other array
console.log(arr.concat([3,4],[5,6]));
// new array from arr and other array then additional values 
console.log(arr.concat([3,4],5,6));

// concat method only copy element from array . Object are added as whole.
arr= [1,2];
let arrayLike={
    0:"something",
    length:1
};
console.log(arr.concat(arrayLike));


// Itrate:forEach
// The forEach() method takes a callback function that run on the every element of the array.
// arr.forEach(function(item,index,array){
// body
// });

arr=["bilbo","Gandalf","Nazgul"];
arr.forEach(function(item,index,array){
    console.log (`${item} is at index ${index} in ${array}`);
});

// Searching in array

// arr.indexOf(item,from) it looks for the item starting from the index and return the index where it was found and if item was not there then return -1.

// arr.lastIndexOf(item,from) method also looks for the item but the searching start from right to left from the index.

// If we want to check if the item exists in the array, then arr.includes()method is preffered.

 arr=[5,1,0,false,5,'hello',];

 console.log(arr.indexOf(0,2));
 console.log(arr.indexOf(false,0));
 
 let fruits=['Apple','Orange',"Apple"];
 console.log(fruits.indexOf('Apple'))
 console.log(fruits.lastIndexOf('Apple'))
 
 arr=[5,1,0,false,5,'hello',];
 console.log(arr.includes(null));
 console.log(arr.includes(0,2));
 console.log(arr.includes(5,2));

//  The include method handles NaN correctly
// The minor feature of NaN is that it correctly handles NaN but indexOf can not handles it correctly.

 arr=[NaN]
 console.log(arr.indexOf(NaN));//-1
// Here index of NaN should be 0 but here it is -1
 console.log(arr.includes(NaN));//true


/* find and findIndex/findLastIndex
The find method looks for the single element that's makes the condition true.
Sometime we have an array of object ,To find an object with a specific condition we use arr.find(fn) which takes a function.
if it return true the search is stopped and the item is returned.
And if nothing is found it return undefined.
*/
let users=[
    {id:1,name:"john"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"}
];
let user=users.find(item=>{
   return item.id==1});
console.log(user.name);

// arr.findIndex method return us the index of the element where it found instead of element itself.
// It return -1 if nothing is found.

// The arr.findLastIndex method is like findIndex, but searches from right to left smilar to lastIndexOf.


users=[
    {id:1,name:"john"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"},
    {id:4,name:"john"},
];

console.log(users.findIndex(item=>item.name=="john"
));

console.log(users.findLastIndex(user=>user.name=="john"));


// filter method
/*filter method takes one or more element that makes the function return true
filter return an array of all matching elements.*/

users=[
    {id:1,name:"john"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"} 
];

let someUsers=users.filter(item=>item.id<3);
console.log(someUsers.length);

// Transform an array
/*map method calls a function on each element of the array and  return the array of the result.
 let result = arr.map(function(item,index,array){

}) */

let lengths=["Bilbo","Gandalf","Nazgul"].map((item)=>{
    return item.length
});
console.log(lengths);

arr=[5,7,9]
let output=arr.map((item)=>{
    return item*2
})
console.log(output);

// Sort(fn)
/* arr.sort() sorts the array and change the element order.
*/
arr=[1,2,15]
arr.sort();
console.log(arr)//[1,15,2]
/* The item are sorted as string by default for comparison.that is why "2"> "15".
If we want to sort element according to our own we need to supply a function as the argument of arr.sort().
*/

function compareNumeric(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b)return -1;  
}
arr=[1,2,15];
arr.sort(compareNumeric);
console.log(arr);

arr=[1,-2,15,2,0,8]

arr.sort(function(a,b){
    return a-b
})
console.log(arr)

// with the arrow function
arr=[1,-2,15,2,0,8];
arr.sort((a,b)=>a-b);
console.log(arr)

// Use localeCompare for String
// So for many alphabet, it's better to use str.localeCompare method to correctly sort letter.

let countries=["Osterreich","[ndorra]","Vietnam"];
console.log(countries.sort((a,b)=> a>b?1:-1));
console.log(countries.sort((a,b)=>a.localeCompare(b)));

//Reverse method
// The method arr.reverse reverse the order of the element in arr.
 arr= [1,2,3,4,5];
 arr.reverse();
 console.log(arr);

//  split and join
// str.split(delim) method split the string into the array by the given delimiter.
// The split method  has optional second numeric argument -a limit on the array length.

let names="Bilbo,Gandalf,Nazgul";
 arr=names.split(",");
 for(let name of arr){
    console.log(`A message to ${name}`)
 }

 arr ="Bilbo,Gandalf,Nazgul,Saruman";
console.log (arr.split(",", 2));

// Split into Letter
// The call to split('') would split the string into an array of letter.
let str="test";
console.log(str.split(''));

// join method
// In join method does the revese of the split method .It create a string of arr items join by glue between them.
 arr= ["bilbo","Gandalf","Nazgul"];
  str=arr.join(" ")
  console.log(str);


// reduce/reduceRight
/*
When we need to itrate over an array we can use forEach .
When we need to itrate over and array and return the data for each element we can use map
So the method reduce and reduceRight also does th esame but it is used to calculate a single value based on the array
Argument:
1.accumlator-  it store the result of the previous functional call and equal to initial for the first time.
2.item
3.index
4.array

 */

arr= [1,2,3,4,5];
let result=arr.reduce((sum,current)=>
  sum + current,0);

console.log(result);

// If there is no initial value then reduce takes the first element of the array as the initial value  and start the itration from the second element.
// If the array is empty ,then reduce call without initial value gives an error

arr=[];
console.log(arr.reduce((sum,current)=>sum+current,0));

// arr.reduceRight method does the same but goes from right to left.
arr=[1,2,3,4,5]
console.log(arr.reduceRight((sum,current)=>sum+current));
 

// Array.isArray
// Array are based on object.
//  It check if an object is an array return true, otherwise false.

 fruits=["Banana","Orange","Apple","Mango"];
 result=Array.isArray(fruits);
 console.log(result);

 let text= "HELLOWORLD";
 result=Array.isArray(text);
 console.log(result)

//  Most method support "thisArg"
// All array method that call function accept an optional additional parameter thisArg.
// syntax of these method
// arr.find(func,thisArg);
// arr.filter(func.thisArg);
// arr.map(func,thisArg);

let army={
    minAge:18,
    maxAge:27,
    canjoin(user){
        return user.age>=this.minAge && user.age<this.maxAge;
    }
};

 users=[
    {age:16},
    {age:20},
    {age:23},
    {age:30}];

    let soldier= users.filter(army.canjoin,army);

    console.log(soldier.length);
    console.log(soldier[0].age);
    console.log(soldier[1].age);
