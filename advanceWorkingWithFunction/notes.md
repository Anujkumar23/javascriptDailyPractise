# Recursion
Recursion is process in which a function that calls itself  is  called a recursive function.
When a function solve a task, in the process ,it can call many other function.
A recursive function must have a condition to stop it self otherwise , the function is called infinitely.

A recursive solution is shorter than the itrative solution.


# Execution Context and Stack
Execution context is a container where all the JS runs.
So the Execution Context has two component :
1. Memory component - It contain all the variable and function 
2. Code component- Code component is a place where code id=s executed line by line.

One function call has exactly one execution contect.
When a function make a nested call:
1.The current function is paused.
2. The execution context associated with it in a special data structure called execution context stack.
3. The nested call execute.
4. After it ends , the old execution is retrived from the stack ,and other function is resume whre it stop.

 # Recursive structure
  A recursive data structure is a structure that replicate itself in parts.
  In the HTML document , an html may contain a list of:
  1.HTML piece
  2.HTML comments
  3. HTML tags
