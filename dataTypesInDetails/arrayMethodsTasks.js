// Write a function camelize(str)that changes dash- seperated words like"my-short-string" into camel cased "myShortString".

function camelize(str){
    return str.split("-").map((word,index)=>index==0?word:word[0].toUpperCase()+word.slice(1)).join("")

 }
  console.log(camelize("background-color"));

//  Write a function filterRange(arr,a,b) that gets an array arr,looks for elements with values higher or equal to a and lower or equal to b  and return a result as an array.

function filterRange (arr,a,b){

return arr.filter((item)=>item>=a && item<=b);

}

let arr=[5,3,8,1];
let filter=filterRange(arr,1,4)
console.log(filter);

// Write a function filterRangeInPlace(arr,a,b) that gets an array arr and remove from it all values expect those that are between a and b .

function filterRangeInPlace(arr,a,b){
    return arr.filter(item=>item>a && item<b);

}
 arr=[5,3,8,,1]
 console.log(filterRangeInPlace(arr,1,4));

//  Sort in decending order
arr=[5,2,1,-10,8];
arr.sort((a,b)=>b-a);
console.log(arr);

// create a function copySorted(arr)that return such a copy.
function copySorted(arr){
    return arr.slice().sort()
}
arr=["HTML","javascript","CSS"];
sort=copySorted(arr);
console.log(sort);
console.log(arr);

