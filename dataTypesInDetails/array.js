// Arrays
/*Array is a data structure used to stored ordered collection of item.

There are two syntax for creating arrays:
1. let arr= new array();
2  arr=[];
Array element are given with index number starting with zero.
We can also  get element by giving index value in square bracket.

*/
let arr= new Array();
  arr=[];//mostly this syntax is used .


  let fruits= ["Apple","Orange","Plum"];
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);

//   We can relace an element or add a new one
fruits[2]="Pear";
console.log(fruits);

fruits[3]="lemon";
console.log(fruits);

// We can get total count of element by its length.
console.log(fruits.length)

// An array can store elements on any type.
 arr=['Apple',{name:"john"},true,function(){console.log("hello")}];

 console.log(arr[0])
 console.log(arr[1].name)
arr[3]();

// An array is just like object may end with comma:
// It make it easier to insert/remove items.
fruits=["Apple",
"oranges",
"plum",];

// GET Last Element With At
/*
We can explicitly calculate the last element index and access it fruits[fruits.length-1].
 */
 fruits= ["Apple","Orange","Plum"];
 console.log(fruits[fruits.length-1]);

/* To find the  element from last index we also have  a shorter syntax  arr.at()
It exactly same as arr[i]
For negative value of i it start count from the end of the array.
*/

fruits= ["Apple","Orange","Plum"];
console.log(fruits.at(-1));
console.log(fruits.at(-2));
console.log(fruits.at(0));

// Methods pop/push ,shift/unshift
/*
push append/add an elememt to the end of an array.
pop remove an element from the end of an array
unshift add/append an element to the beginning of the array
shift remove an element from the beginning of the array.

 */

// pop
// Both fruits.pop and fruits.at(-1) return the last element but pop method also modify the array by removing the last element.

fruits= ["Apple","Orange","Plum"];
 console.log(fruits.pop());
 console.log(fruits);

//  push
// Both fruits.length is equal to fruits.push(..)
// We can add multiple element to the array at once  with this method
 fruits= ["Apple","Orange","Plum"];
 console.log(fruits.push("pear"));
 console.log(fruits.length);

 console.log(fruits[fruits.length-1]);
 console.log(fruits.length-1);

//  shift
/*
It extract the first element of the array and return it :
*/
fruits= ["Apple","Orange","Plum"];
console.log(fruits.shift());
console.log(fruits);

// unshift
// It append the element to the beginning 
// We can add multiple element with this method at once 
fruits= ["Apple","Orange","Plum"];
console.log(fruits.unshift("pineapple"));
console.log(fruits);

// Performance
/*
Method  pop push run faster then the method shift unshift,Because in pop and push we just remove and add element to the last of the array.

In Case of shift
but in case of shift and  it  just not  remove element but it need to move element to the left ,renumber them from index 1 to index 0 from 2 to 1 and like this.
Also it update the length property.
The more element in the array more time to move and renumber them.

In case of unshift
It add an element to the beginning of the array at index 0 ,so first we need to move element to the right then renumber their index 
*/

// Loops
// The for loop is the oldest method to itrate over the indexes.

arr=  ["Apple","Orange","Plum"];
for (let i=0;i<arr.length;i++){
    console.log((arr[i]));

}

// We also have for..of loops . IT does not give access to the number of current element but the value only

 fruits=["Apple","Orange","Pear"];
 for (let fruit of fruits){
    console.log(fruit);
 }

fruits=["Apple","Orange","Pear"];
 for (let fruit in fruits){
    console.log(fruits[fruit]);
 }



// About length
// The length is not the count of the value in the  array but the greatest numeric index + 1.

fruits=[];
fruits[123]="apple"
console.log(fruits.length);

 arr= [1,2,3,4,5];
 arr.length=2
 console.log(arr)

 arr.length=5
 arr[2]=3
 arr[3]=4
 console.log(arr)
 arr.length=0
 console.log(arr)

//  new Array
// There is another syntax to create an array
 arr= new Array ()

//  If a new Array is called with a single argument which is a number , then it create  an array without item , but with the given length.
 arr = new Array(2)
 console.log(arr[0])
 console.log(arr);
 console.log(arr.length)

// Multidimentional Array
// Array can have item that are also array ,we use it for Multidimensional array.

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[0][2]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);
console.log(matrix[1][2]);
console.log(matrix[2][0]);
console.log(matrix[2][1]);
console.log(matrix[2][2]);

// tostring
arr= [1,2,3]
console.log(arr);
console.log(String(arr));

// Array implement only toString conversion so [] this become empty string. 
console.log(([]+1));
console.log([1]+1);
console.log([1,2]+1)
// When we add a binary operator "+" add something to string ,it convert it to  a string

console.log(""+1);
console.log("1"+1);
console.log("1,2"+1);

// Don't compare arrays with==
/*Array should not compare with == operator
1. Two object are equal == only if they are reference to same object.
If one of the argument of == is object and other one is primitive ,then the object get converted to primitive 
null== undefined and nothing else
If we compare array with == ,they are never the same  unless the variable  reference to same object.

*/
console.log([]==[])//false
console.log([0]==[0])//false
// they are different array so they are not refering to same  array.
console.log(0==[]);//true
console.log("0"=[])//false
// When we compare an object to a primitive it convert to the primitive  for purpose of comparison and become empty string.
// Dont compare array with == , use for..of loop to 
















