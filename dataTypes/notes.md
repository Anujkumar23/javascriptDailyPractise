
/*what are data types 
we need a variable  to store a value that value could be of any type string ,number,boolean etc. so the type of that value is known as datatype
//***ABOUT STRING***
A string is a datatype and it is a series of character which is inside quotes. 
In Js we have three way to define string
1.In Doubles quotes
2.In single quotes
3.inside backticks   

the first one and second works same but  in backticks there is  a additional feature ,that we can use variable and expression inside the string with the help of ${..}
String could be of any length zero,empty or many.


#####  NUMBERS#####
The number is also a data type which contain both integer and floating point number.
we can perform many operation like multiplication,addition,substraction division.
In number Datatype there is also a "special numeric value " like infinity and NaN(not a number)

if we divide any number with 0 it will give us infinity.and if we divide any number with a string it will give us NaN. 

***** BIGINT DATATYPE****
IN JS number datatype  cannot represent number larger that (2 raise to power 53 -1    or smaller than -(2 raise to poewr 53-1))

we created a bigint type number by appending n to the end of the integer or by calling a function bigint that create a bigint number from string or number.

##Math operation.####

it is mostly used like regular number but we cant use bigint number with other type
we can explicitly convert a bigint number to number by  using Number() and a number to bigint by using BigInt().

## unary + is not supported in  bigint####

the unary plus operator is used to convert value to number but it is not supported in bigint so we use Number() to convert bigint to number.

####COMPARISON
comparison operator <,> in bigint and number work in same way 
Number and bigint are  different types they can have same value and equal ==, but they are not strictly equal===.

when a bigint is inside if or other boolean opration it behave like similar to number. it return false for 0n and true for 1n. 



###### BOOLEAN (LOGICAL TYPE)####
Boolean datatype has two value true and false
true means "yes" and false means "no

when we compare two value the result also come with boolean value true and false

#####  NULL VALUE ####
This is a special type of datatype which contain only null value. Null value means empty ,unknown.

when we do typeof null it return us object 

###UNDEFINED###

The undefined  is also a special type which means value is not assigned.when we declared a variable but not assigned value to that variable it return undefined.
the type of undefined is undefined.
when we conpare null and undefined with == its gives us true because == compare value by type conversion both null and undefined return false.so that it consider it equal
but it is not possible in === .

###### OBJECTS#####
Object is a datatype which used to store a collection of data .object is created with this bracket{} called object literal  in key:value pair where key(identifier) is a string and value can be anything
There is  another way to create  a object with object constructor or (new)keyword.
We can access the value using dot notation.
We can add ,remove and read properties from the object.
To remove a property we use delete Operator.
We can also write our key in multiwords inside quotes.But we  cannot access a property with dot operator.

####symbol####
symbol type is used to create a unique identifier for object .Symbol are immutable  and unique. WWe can create symbol with Symbol().
we can add symbol to object as a key with the help of []square bracket.
Symbols are not included in for.. in loop.





*/