// Map and Set
// Object are used for storing  keyed collections.
// Array are used for storing ordered collection. 

// Map
// Map is also used for collection of keyed data item like object.But the main difference is that map allows keys of any type.

// Method and Properties are:
/*
new Map()-creates the map.
map.set(key,value)-stores the value by the key.
map.get(key)-return the value by the key,undefined if key doesn't exist in map.
map.has(key)-return true if key exist ,otherwise false.
map.delete(key)-remove the value by the key.
map.clear()-remove everything from the map.
map.size()-return the current element count.
*/

let map= new Map();
map.set("1","str1");
map.set(1,"num1");
map.set(true,"bool1");

console.log(map.get("1"))
console.log(map.get(1))
console.log(map.get(true))
console.log(map.size);
// So keys are not converd to strings in map, unlike object can store any of keys.

// map[key] is not the right way to use map
// We can use map[key] but it will treating map as a javascript object.

// Map can also used object as keys
// let john={name:"john"};

// let visitCountMap=new Map();
// visitCountMap.set(john,123);
// console.log(visitCountMap.get(john))

// Using object as key is one of the important feature of map.
// String as a key in object is fine but we can't use another object as key in object.

let john={name:"john"};
let ben={name:"Ben"};
let visitCountObject={}

visitCountObject[ben]=234;
visitCountObject[john]=123;
console.log(visitCountObject)

// How Map compares keys
// Map uses algorithm SameValueZero.It is same as strict equality===.
// But the only difference is that NaN is considered equal to NaN.NaN can be used as a key.


// Chaining
// Map.set call return the map. So we can chain the calls.

map.set("1","str1").set(1,"num1").set(true,"bool1")

// For looping over a map ,there are three methods.
// map.keys()-return the iterable for keys.
// map.values()-return the iterable for values.
// map.entries()-return an iterable for entries[key,value]

let recipeMap=new Map([["cucumber",500],
["tomatoes",350],
["onion",50]]);

for(let vegetable of recipeMap.keys()){
    console.log(vegetable);
}


for(let amount of recipeMap.values()){
    console.log(amount);
}

for (let entry of recipeMap.entries()){
    console.log(entry);
}

// The insertion order is used
// The iteration goes in the same order as the value were inserted.
// Map has a built-in forEach method,similar to array.

 recipeMap.forEach((value,key,map)=>{
    console.log(`${key}:${value}`);
 });

//  Object.entries:Map from Object
// When a map is created we can pass an array with key/value pairs for initialization.

map=new Map([["1","str1"],[1,"num1"],[true,"bool1"]]);
console.log(map.get("1"))

// If we want to create a Map from a plain object we can use  object.entries(obj)that return an array of key/value pairs for an object.

let obj={
    name:"john",
    age:30
};

 map=new Map(Object.entries(obj))
 console.log(map.get("name"))

//  object.entries return a array of Key/value pairs:[["name","john"],["age",30]]

// Object.fromEntries:Object from Map
// With he help of Object.fromEntries method we can create an object from the map.

let prices=Object.fromEntries([["banana",1],
["orange",2],
["meat,4"]]);
console.log(prices.orange);
// We can use object.fromEntries to get a plain object from map.


 map=new Map();
 map.set("banana",1);
 map.set("orange",2);
 map.set("meat",4);

 obj=Object.fromEntries(map.entries());
 console.log(obj.orange);
//  map.entries() return iterable of key value pairs,in the right format.
// We can also use 
obj= Object.fromEntries(map);
// because it expect an iterable object as the argument not necessarily an array. map.entries() do the same.

// Set
// A set is a special type collection that set value with keys and each value occur only once.
// its main method:
// new Set(iterable)- create the set and if an iterable object is provided copies value from it into the set.
// set.add(value) -Add a value and return the set.
// set.delete(value)-remove the value and return true if value existed at tje time of call ,otherwise false.
// set.has(value)- return true if the value exists in the set.
// set.clear()-removes everything from the set.
// set.size-gives the element count.

// The main feature of the set is that set.add(value) with the same value dont't do anything. This is the reason each value appear only once.

let set=new Set();
 john={name:"john"};
 let pete={name:"pete"};
 let mary={name:"mary"};

 set.add(john);
 set.add(pete);
 set.add(mary);
 set.add(john);

 console.log(set.size);

 for (let user of set){
    console.log(user.name);
 }
 
//  Itration over Set
 set= new Set(["oranges","apples","bananas"]);
 for (let value of set){
    console.log(value)
 }
 
//  same with forEach
set.forEach((value,valueAgain,set)=>{
    console.log(value)
})

// Method in Set

// set.keys()-return an iterable object for values
// set.values()-same as set.keys.
// set.entries()-return an itrable object for entries[value,value]

