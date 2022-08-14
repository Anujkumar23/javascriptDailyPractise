Nullish Coalescing operator is define by two ??.

It treat null and undefined in sameway . 

The result of a?? b:
if a is defined ,then a
if a is not defined ,then b

We can say that it is better way to write ternary operator.

We can also use a sequence of ?? to select value that is true or not null/undefined.

#### COMPARISON WITH OR ####
We can use OR || operator in the same way as ?? but the diffenence is that OR operator return the first truthy value and ?? operator return the first defined 

OR treated the false,0 empty string,null and undefined in the same way but it is different in ?? operator.

##### PRECEDENCE ######

The precedence of the ?? is same as || is equal to 4


The nullish coalescing operator provide short way to get defined value 

We can not use ?? operator with || , && without explicit parantheses.

