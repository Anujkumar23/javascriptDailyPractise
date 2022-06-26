In javascript we can work with primitives as  they were object.
A primitive is a value of a primitive type and we have 7 types of primitive sin JavaScript.

Whereas an object is capable of storing multiple value as property .
A function is also treated as an object.
We can also store a function as a property of object called method .

primitive contain only a single value.
Js allow us to use method and properties of these  primitive datatype. 

Null and undefined has no method.

# About Number
 In Javascript ,we can shorten the number by adding the letter "e" to it.
 e9 means 1 *(multipling) 1000000000

 Hex,binary and octal number
 Hexadecimal nummber are used in JS  to represent  Colors,encode Character. We can write hexadecimal number in shorter way like 0x.
 We can also use binary and octal number but they are rarely used and represented with 0b and 0o.

 Num.toString(base) return a string representation of number with a given base an an argument.

 console.log(255..toString(16));
 If we want to call a method directly on a number then we need two dot before call a method .Single dot gives us an error because it implies a decimal part after a number.

 Rounding
// IN JS we have different builtin function for rounding
console.log(Math.floor(3.1));//It round down the value and become 3
console.log(Math.ceil(3.1));//It round up the value and become 4
console.log(Math.round(3.5));//It round the value to the nearest integer so3.5 become 4.
console.log(Math.trunc(2.33));//It remove the value after the decimal point but without rounding.

 There are two way if we want value after the decimal 

1. If we want 3 digit after decimal  point we can multiply the number with 1000 and call the round function and then divide it again with the hundred 
console.log(Math.round(num*1000)/1000);

2. toFixed(n) round the number to the n digit and return the string representation.
console.log(num.toFixed(2));

num= 12.36
console.log(num.toFixed(1));//it round up or down to the nearest value.
The result of toFixed is a string

console.log(0.1+0.2==0.3);  //false
 A number is stored in memory in its binary form zero and one .
 0.1 is 1 divided by ten in decimal numeral system it is easily representable . But in binary numeral system  the division by power 2 work but but 1/10 become endless binary fraction. 

The most relialbe method is to round the result with the help of a method toFixed(n).
Test: isFinite and isNaN 
Infinity is a special numeric value that is greater than anything
-Infinity is a special numeric value that is less than anything
NaN represent an error.

These belongs to number but they are not like regular number .

isNaN(value) converts its argument to number then check for is number or not .
The value NaN is unique comparison operator is not applies . It does not equal anything including itself.

is Finite is used to check a string is a regular number or not

parseInt and parseFloat
Sometimes we have value like "100px" and "12pt"and we need to extract the numeric value from this then there we need this parseInt and parseFloat.
It read number from a string and if they didn't find a numeric value or find an error the gathered number return.
The parseInt return a integer value 
The parseFloat return the floating point number.
parseInt and parseFloat sometime return NaN when no digit found.


# About Strings
The Textual data is stored in strings.

Quotes..
we can define strings with three form
1. Single Quote
2. Double Quote
3. Backticks
Single and Double quotes are basically same . But in Backticks we can add variable and expression into string ,by wrapping it in ${}.
With the backticks we can write multiple lines.But it is not possible in singke and double quotes. 

Special Character..
We can create multiple line strings with single and double quotes by using "newline character" \n
All Special character start with \ called as escape character.
We use this escape character if we want to add quote in our sentence.
IF we need to show a \ in our string we need to use double .

String Length..
The length propery gives the length of the string.
str.length is a property not a function so it is written like str.length not str.length(). 

Accessing Character
We use square bracket [pos]to access a character postion or call the method str.charAt(pos).
The square Bracket are a moodern way to getting a character , and charAt is the older method.
The diff b/w [] and charAt is them [] method return undefined if no character found and charAt gives an empty string.
Strings are immutable 
String can not be changes in JS.
It is impossible to change a character.

Seraching for a substring
 We can search a substring from a string with the method str.indexOf(substr,pos)

 str.lastIndexOf(substr,pos)
In lastIndexOf it will start searching from ending to the beginning.
It list the occurance in reverse order.

include,startWith ,endsWith
 str.includes(substr,pos) return true if str contain substr and false if not.


 Getting a subString..
There is a three methods in Js to get a substring: substring,substr,slice

1.str.slice
 It return the part of the string from start to end (not including end value)
 If there is no second argument, then slice goes till the end of the String.
 We can also give negative value in start and end but then it start counted from the string end.

2.str.substring(start,end)
It return the part of the string b/w start and the end.
It is same as sliice but it allow the start to be greater than end.
Negative argument are not supported in str.substring.

3.str.substr
It return the part of string from start with the given length.
Here it take second argument as length unlike substring and slice.
It can  take first argument as negative so count strat fron string end.
The length of the substr is start from the start .

 Comparing strings
 String are compared character by character in alphabetical order.
All the lowercase letter go after uppercase letter because their code are greater.
The compare string according to the language use  str.localeCompare(str2) otherwise they are compared by character code.
Return a negative number if str is less than str2
Return a positive number if str is greater than str2
Return 0 if they are epuivalent.
