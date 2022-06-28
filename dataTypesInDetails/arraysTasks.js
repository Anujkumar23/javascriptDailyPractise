// 1.
// let fruits= ["Apple","Pear","Orange"]
// let shoppingCart=fruits;
// shoppingCart.push("Banana");

// console.log(fruits.length);//4
// // because shoppingCart and fruits reffering to the same array.


// // Array operation
// //1.Create an array styles with items "jazz" and "Blues".

// let styles= ["jazz","Blues"];

// //Append "Rock -n-Roll" to the end
// styles.push("Rock-n-Roll")
// console.log(styles);

// // Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.

// styles[1]="Classics"
// console.log(styles);

// // Strip off the first value of the array and show it.
// console.log(styles.shift());

// // Prepend Rap and Reggae to the array.
// styles.unshift("Rap","Reggae");
// console.log(styles);

// // 3.What is the result? Why?
// let arr= ['a','b'];
// arr.push(function(){
//     console.log(this);
// });
// arr[2]();

// // sum input number

//  function sumInput(){
//     let numbers= [];
//     while(true){
//         let value= Prompt("enter a number");

//         if(value==''||value==null||!isFinite(value)){
//             break;
//         }
//         else{
//             numbers.push(+value);
//         }

//         let sum=0;
//         for (number of numbers){
//             sum=sum+number;
//         }
//         return sum;
//     }
//     console.log(sumInput());

// }

// A maximal subarray
function getMaxSubSum(arr){
    let maxSum=0;
    let partialSum=0;
    
    for(let item of arr){
        partialSum+=item;
        // console.log(partialSum)
        maxSum=Math.max(maxSum,partialSum);
        // console.log(maxSum)
        if(partialSum<0){
            partialSum=0;
        }
    }
    return maxSum;
}
console.log (getMaxSubSum([-1,2,3,-9]));






