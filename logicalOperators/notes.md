There are four type of logical operator in JS.
|| OR
&& AND
!NOT
?? Nullish Coalescing

Logical  operator can be applied to  value of  any type and also result can be of any type. 


##### || OR #####
true||true  //true
true||false //true
false||true //true
false||false //false

In logical operator if a operand is not a boolean it is converted to boolean.

The number 1 is true and 0 is false

OR is used in if statement to check if any condition is true.

OR finds the first truthy value 
Now if we have multiple value in OR operator
OR operator evaluate value from left to right.

First it changes all operands to boolean then if the value is true return the original value of operand.
if all the value are false return the last value.


####SHORT-CIRCUIT EVALUATION####
It is a another feature of OR operator.
 OR || operator process its argument until it find first true value .


 people use this command when the condition on left part is falsy.




 #### AND OPERATOR ####

The  AND operator is represenetd by two && operator
In AND operator

true && true  //true
true && false //false
false && true //false
false && false //false


And operator find the first falsy value

it also start from left to right 

First it convert operands to boolean and when it find first falsy value it return the original value.

if it find all value true it will rerurn the last value.

 Precedence of AND&& operator is higher than OR|| .

### !NOT OPERATOR ####
The NOT operator is represented by exclamation sign.
It convert the  operands to boolean value true or false.

it return the inverse value.

Precedence of NOT operator is higher than all other logical operator.




