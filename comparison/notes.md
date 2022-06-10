/* ###COMPARISON
The comparison Operator are those  we are used to compare two value.
In javascript wehave

1. Greater than >, less than <
2. Greater than or equal=>,Less than or equal <=
3. Double equal to check  the equality of the value.
4.  Not equal   !=  

When we compare two value the comparison result always comes in boolean form true or false

####STRING COMPARISON####
 In string  comparison  first character of the string is compared with the second character. If the character of first  string is greater then first string  is greater, otherwise the second string.
  If both the character are same then  we will compare the second character in the same way.

  Now if the length of the second string is lesser than the first string then first string is greater otherwise second string.

  Uppercase letter are different from the lowercase letter 
  
  lowercarse letter has  greater indec then the uppercase letter.


  ####COMPARISON OF DIFFERENT TYPES####

When different value are compared javascript convert those value to Number.

For boolean true become 1 and false become 0
 
 "0" is treated as a string in boolean and retrun true
 but 0 is treated as number in boolean and return false.


 ####STRICT EQUALITY####
 In ==  it convert all the datatype to number then check the equality,but in strict equality 

 === it check the equality with converting the type if value and type is same return equal otherwise false.

###NULL AND UNDEFINED####
There is a special rule that null==undefined but it apllicable to null and undefined not for  other .

For maths and other comparison operator null become 0 and undefined become NaN

comparison operator and equality checks works differently  so thats why null ==0 is false 

The undefined is only equal to null. it return false for all other value.



*/