#### LOOPS ####
Sometimes we have to repeat the same action again and again .Loops are a way  to repeat the code multiple time.

IN JS we have three type of loop :
The While loop
The For loop 
The do.. While


### While loop ###
In  while loop if the condition is true   the code from body is executed 

A single execution of loop is called itaration
 I while loop Conditon not just take comparison ,it can also take  expression or variable as a  loop condition.

 Condition is evaluated and converted to boolean value.

 Curly braces is not required for single statement.


 #### do ....while loop ####
 In do while the loop first execute the code then check the condiition if the condition is truthy then   again itrate.
 If condition is false it stops from execution.

 We use this loop when we want the code of the body to execute atleast once if  the condition is false for the first time 


 ### for loop ####
 The for loop is most commonly used loop .

 for (bigin:condition;step){
    //loop  body
 }

bigin : it execute once when enter into the loop
condition: Now the condition is checked if the condition is true  body of the loop is executed otherwise loop stop.
step: step is execute on each itration after the execution of body.

// Inline variable declaration:
If we declare a variable inside the loop then the scope of that variable is only inside the loop.
In inline variable we cannot excess these variable outside the loop.because variable can be access only inside the loop.

If we use existing one  we can access it because we declared it outside the loop.

### SKIPPING PART ####
Any part of for loop can be skipped



#### breaking the loop ####
The loops exits when the condition become false but we have a keyword through which we can force the exit. 
 The break keyword stop the whole execution of the loop 

#### continue ####
 The continue is also like the break keyword what it does not stop the whole execution of the program but just skip the current itaration and move  to the next  itaration.

 The break and continue are not allowed to the right side of ? operator it gives us a syntax error.

##### LABELS####
Sometime we  need to exit from the  nested loop at once in this case break does not work ,break exit us from inner loop only so here we use label.
We write it before starting the loop  

