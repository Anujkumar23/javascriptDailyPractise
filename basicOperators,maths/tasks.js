/*1.What are the final value of variable a,b,c and d*/

// let a=1
// let b=1;

// c=++a;//c=2 it increment first by one value then the value of a will print
// console.log(c)
// let d=b++;//d=1 because the value of b will print first then increment

// console.log(d)
// console.log(a)
// console.log(b)


// 2.what are the value of a and x

 let a=2;
let x=1+(a*=2);

console.log(a)//a=4 because the value of a will multiply with 2 gives us 4    a=a*2

console.log(x)//x=5,   1 will add in the value of a after multiplication and updated value of x is 5




// type conversion


console.log(""+1+0)//10 because first value is string is concat 2nd value and then concat 3rd value.

console.log(""-1+0)//-1 because here string is treated as zero so answer is -1

console.log(true+false)//1  because true=1 and false=0
console.log( 6/"3")//2 it treated string value as number in mathematical operation

console.log("2"*"3")//6 it strings treated as number in mathematical operation.
console.log(4+5+"px")//"9px" here first two number will add and gives 9 and px will concatenate with 9.
console.log("$"+4+5)//$45 because  first value is string concatenate with 4 and then with 5 resulr "$45"
console.log("4px"-2);//NaN a non numeric value exist
console.log("  -9  "+5)//return string because  5will concatenate with -9 

console.log(null+1)//null is treated as zero i mathematical operation

console.log(undefined+1);//it become NaN after numeric conversion.

console.log("\t\n"-2)//here string is treated like empty string so empty string treated as zero




