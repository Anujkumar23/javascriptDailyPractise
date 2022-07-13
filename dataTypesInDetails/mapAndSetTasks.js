// Create a function unique(arr) that should return an array with unique item of arr.

function unique(arr){
    return Array.from(new Set(arr));
}
let values=["hare","krishna","hare", "krishna","krishna","krishna","hare","hare",":-O"];
console.log(unique(values));

// Write a function aclaean(arr) that return an array cleaned from anagrams.

function aclean(arr){
    let map = new Map();
    for (let word of arr){
        let sorted =word.toLowerCase().split("").sort().join(" ")
        map.set(sorted,word);
    }
    return Array.from(map.values());

}
let arr=["nap","teacher","cheater","PAN","ear","era","hectare"]
console.log(aclean(arr));


// we'd like to get an array of map.keys() in a variable and then apply array-specific method to  it .push

let map= new Map();
map.set("name","john")
let keys=Array.from(map.keys());
keys.push("more");
