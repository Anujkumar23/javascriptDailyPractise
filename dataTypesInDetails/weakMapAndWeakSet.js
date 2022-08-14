// WeakMap and WeakSet

let john={name:"john"};
// john=null;
console.log(john);
console.log(john.name);

john={name:"john"}
let arr=[john];
// john=null
console.log(john);
console.log(john.name);


john={name:"john"}
let map=new Map();
map.set(john,"...")
// john=null;

// WeakMap
// In WeakMap keys must be an Objects,not primitive value.

let weakMap=new WeakMap();
let obj={};
weakMap.set(obj,"Ok");
// weakMap.set("test","Whoops")
console.log(weakMap.get(obj));

// if we use an object as a key in it, and there is no other references to that object it will remove from the memory.
john={name:"john"};
weakMap=new WeakMap();
weakMap.set(john,"...");
john=null;
console.log(weakMap.get(john));

// WeakMap does not support iteration and methods keys(),value(), and entries(),so we can't get value and keys from it.


// Use case:additional data
// So the main purpose of using WeakMap is that, We store data in the WeakMap,using the object as a key,and data should exist only when while the object is alive,when the object is garbage collected the data will autoamtically disappear.
// visitsCount.js
let visitsCountMap=new Map();
// incearse the visit count
function countUser(user){
    let count =visitsCountMap.get(user)||0;
    visitsCountMap.set(user,count+1)
}

// main.js
 john={name:"john"};
 countUser(john);

 john=null;
//  we need to clean visitCountMap when we remove users, otherwise it will grow in memory indefinitely. 
// We can avoid it by switching to WeakMap 
visitsCountMap=new WeakMap();

function countUser(user){
    count= visitsCountMap.get(user)||0;
    visitsCountMap.set(user,count+1);
}
// Now we don"t need to clean visitsCountMap.After john object become unreachable ,it get removed from the memory,along with the information by that key from map.

// Use case: caching
// In caching we can store result from a function so that future calls on the same object can reuse it

// Cache.js
let cache= new Map();
// calculate and remember the result
function process(obj){
    if(!cache.has(obj)){
        let result=obj;
        cache.set(obj,result);
    }
    return cache.get(obj);
}
// main.js
 obj={}
 let result=process(obj);
 let result2=process(obj);
 obj= null;
 console.log(cache.size)

//  For multiple call of process(obj) with the same obj, it only calculate the reult for first time ,and then just take it from cache.We need to clean cache when the object is not needed.
// If we replace Map with WeakMap,this problem disappear.The cached result will be removed from memory.
// cache.js
cache=new WeakMap();
function process(obj){
    if(!cache.has(obj)){
        let result=obj;
        cache.set(obj,result);
    }

    return cache.get(obj)
}


// main.js
 obj={};
let result1=process(obj);
let result3=process(obj);
obj=null
console.log(cache.size);//can't get cache.size because its WeakMap.
// When obj gets garbage collected ,cached data will be remove as well.

// WeakSet
// WeakSet is similar to set,but we may only add object to WeakSet(not primitives).
//An object exists in the set while it is reachable from somewhere else.
// like set, it support add,has and delete but not size ,keys() no iterations.

let visitedSet=new WeakSet();
 john={name:"john"};
 pete={name:"pete"};
 mary={name:"Mary"};

 visitedSet.add(john);
 visitedSet.add(pete);
 visitedSet.add(john);

 console.log(visitedSet.has(john));
 console.log(visitedSet.has(mary));
 john=null;





