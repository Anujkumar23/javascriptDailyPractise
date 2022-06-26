# Object
Object is  the reference data type which store the collection of data in key and value pair.
The key is a string and value can be anything.
We can add,remove and read files from the object.
In object we can add any type of value .
To remove a property we can use delete operator.
We can also us multiproperty name as key but it shoud be in quotes.
The last property in the in the list can end with a comma called "trailing" or "hanging" comma.

# Square Bracket
For multiword ,dot access does not work.
In JS we can also use square bracket to access property in object.
So in dot what happen is a require a valid name(identifier).
Square bracket provide a way to access a property name as a result of any expression.

# computed Property
we can also use square bracket in object literal when creating an object.



# Property name limitation
We know that we cannot use reserved word in our varibale name or variable name can not equal to the reserved word but in Object their is no limitation on property name. They can be any string or symbol.
In object when we use a number as a property key number become a string.

# property existence
In JS it is possible to access any property .There is no error if the property doesn't exist.
We can also check the property with a special operator "in"

# For..in loop
In Object if we want to access all keys of object ,their exist a special form of loop for..in


# method
If we declare a function expression as property of object that is called the method of object.
this refer to the current object.
if we use this in any function without calling an object  it will give us undefined.
If we call a function without an object it will give us undefined in strict mode and window object in non strict mode.