// More way to write a number
let billion= 1000000000;

// We can also use underscore
billion= 1_000_000_000;
// under in between the number make it more readable

// In Javascript ,we can shorten the number by adding the letter "e" to it.
billion= 1e9;
console.log(billion);
// e9 means 1 *(multipling) 1000000000

let mcs= 1e-6;
console.log(mcs);
// here a negative number after  e means a division by 1 wirh given number of zeroes.
1e-3 // means 0.001
1.23e-6//means  0.00000123
1234e-2===1234/100 //12.34

// Hex,binary and octal number
// Hexadecimal nummber are used in JS  to represent  Colors,encode Character. We can write hexadecimal number in shorter way like 0x.

console.log(0xff);//255
console.log(0xFF);//case does'nt matter.

// We can also use binary and octal number but they are rarely used and represented with 0b and 0o.

let a= 0b11111111;//binary form of 255
let b= 0o377// octal number of 255
console.log(a==b)//true ,because value are same.

// toString(base)

// Num.toString(base) return a string representation of number with a given base an an argument.
let num=255
console.log(num.toString(16));//ff
console.log(num.toString(2)); //11111111
console.log(num.toString(36)) ;//73
console.log(255..toString(16));//If we want to call a method directly on a number then we need two dot before call a method .Single dot gives us an error because it implies a decimal part after a number.

// Rounding
// IN JS we have different builtin function for rounding
console.log(Math.floor(3.1));//It round down the value and become 3
console.log(Math.ceil(3.1));//It round up the value and become 4
console.log(Math.round(3.5));//It round the value to the nearest integer so3.5 become 4.
console.log(Math.trunc(2.33));//It remove the value after the decimal point but without rounding.

// There are two way if we want value after the decimal 

//1. If we want 3 digit after decimal  point we can multiply the number with 1000 and call the round function and then divide it again with the hundred 
num= 1.23456;
console.log(Math.round(num*1000)/1000);

//2. toFixed(n) round the number to the n digit and return the string representation.
 num= 1.23456
console.log(num.toFixed(2));

num= 12.36
console.log(num.toFixed(1));//it round up or down to the nearest value.
//The result of toFixed is a string we can change it to a number with unary plus or Number() call.


// Imprecise Calculation

console.log(0.1+0.2==0.3);//false
// A number is stored in memory in its binary form zero and one .
/* 0.1 is 1 divided by ten in decimal numeral system it is easily representable . But in binary numeral system  the division by power 2 work but but 1/10 become endless binary fraction. 

The most relialbe method is to round the result with the help of a method toFixed(n).

*/
let sum= 0.1+0.2;
console.log(sum.toFixed(2));

// We can also show the same result by multiplying and divide method.
console.log((0.1*10+0.2*10)/10);


// In the internal representation of number there is the existence of two zero -0 and zero


/* Test: isFinite and isNaN 
Infinity is a special numeric value that is greater than anything
-Infinity is a special numeric value that is less than anything
NaN represent an error.

These belongs to number but they are not like regular number .

isNaN(value) converts its argument to number then check for is number or not .
The value NaN is unique comparison operator is not applies . It does not equal anything including itself.

is Finite is used to check a string is a regular number or not


*/
console.log(isNaN("str"));
console.log(isNaN(NaN));
console.log(isNaN("20"));
console.log(NaN==NaN);

// let val= +prompt("enter a number","");
// console.log(isFinite(val));


// Object.is
/*It also compare value like === but in more reliable manner
Object.is(Nan,NaN)===true
Object.is(0,-0)===false
object.is(a,b) is same as a===b

*/
let x= 20;
let y=20;
console.log(Object.is(x,y));
console.log(Object.is(NaN,NaN))


//parseInt and parseFloat
/*Sometimes we have value like "100px" and "12pt"and we need to extract the numeric value from this then there we need this parseInt and parseFloat.
It read number from a string and if they didn't find a numeric value or find an error the gathered number return.
The parseInt return a integer value 
The parseFloat return the floating point number.
parseInt and parseFloat sometime return NaN when no digit found.
*/


console.log(parseInt('100px'));
console.log(parseInt('12.5em'));
console.log(parseInt('12.3'));
console.log(parseFloat('12.3.4'));
console.log(parseInt("a123"))

// Other MAth Function
//JS has built in Math  object that contain some libraries.
console.log(Math.random());//return a number from 0 to 1(not including 1)
console.log(Math.max(1,2,3));// return the maximum number
console.log(Math.min(-1,-2,0,3));// return the minimum number
console.log(Math.pow(2,3));// return 2 raised to power
