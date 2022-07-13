//With the help of itrables we can make any object usable in a for ..of loop.
// If an object is not an array but represent a collection of soomething  Then we can use the for..of to loop over it

// Symbol.itrator

// let range={
//     from:1,
//     to :5
// };

/*To make this object iterable we need to add a method to object Symbol.iterator.
1. When for..of start,it calls the method once .The method return an iterator.
For ..of works only with the return object.
When for ..of wants next value,it calls next() on the object.
The result of next() must have form {done:Boolean,value:any}

*/

let range = {
  from: 1,
  to: 5,
};
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
for (let num of range) {
  console.log(num);
}

// Infinite itrator
// Infinite itrator are also possible.range become infinite for renge .to = infinity.

// String is itrable
// Arrays and string are most used built in itrables
// For string for..of itrates over its Character.

for(let char of "test"){
    console.log(char);
}

// Calling an iterator explicitly
let str="Hello";
let iterator=str[Symbol.iterator]();
while(true){
    let result=iterator.next();
    if(result.done){
        break;
    }
    console.log(result.value);
}

// Iterable and array likes
// Iterable are objects that implement Symbol.property object.
// Array-likes are object that have indexes and length.

//strings are both iterable(for..of work) and array-like (they have indexes and length)
// An iterable may not be an array and an array-like may not be an itrable.

// Array-like object
let arrayLike={
    0:"Hello",
    1:"World",
    length:2
};
// array-like and iterables are usually not array,they don't have push,pop method etc


// Array.from
// Array.from is a universal method that takes an iterable or array like value and makes a real array from it.
// After making it array we can call array method on it.

arrayLike={
    0:"Hello",
    1:"world",
    length:2

}
let arr= Array.from(arrayLike);
console.log(arr)
console.log(arr.pop());


 range = {
    from: 1,
    to: 5
  };
  arr= Array.from(range);
  console.log(arr);
