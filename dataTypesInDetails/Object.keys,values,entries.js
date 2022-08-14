/* We saw method map.keys(),map.values(),map.entries().
 If we ever create a data structure of our own ,we should implement them too.
 They are supported for:
Map
Set
Array

plain Object also support similar method ,but the syntax is bit different.

For plain Object The method are:
Object.keys(obj)- return an array of keys
Object.value(obj)- return an array of values
Object.entries(obj)- return an array of [key,value] pairs.

Difference :
1.We have to call Object.keys(obj) not obj.keys().
2.Object.* method return real array objects,  not just itrable
*/

let user={
    name:"john",
    age:30
};
for (let value of Object.values(user)){
    console.log(value)
}

// Object.keys/values/entries ignore symbolic properties
// Just like for..in loop these method ignore properties that use Symbol(...) as keys.
// But if we want sumbolic properties too, we can use  a seperate method Object.getOwnPropertySymbols that return an array of symbolic keys.
// Reflect.ownKeys(obj) return all keys.


// Transforming object
// Object doesn't have some method that exist for arrays - map,filter and other.
// If we want to apply them we can use Object.entries followed by Object.froomEntries.

// 1.Use Object.entries(obj) to get an array of key/value  pairs from obj.
// 2.Use array method (map)on that array to transform these key/value.
// 3.Use Object.fromEntries(array) on the resulting array to turn back it to object.

let prices={
    banana:1,
    orange:2,
    meat:4,
};
let doublePrices=Object.fromEntries(Object.entries(prices).map((entry)=>{
    return [entry[0],entry[1]*2]
}));
console.log(doublePrices.banana)
