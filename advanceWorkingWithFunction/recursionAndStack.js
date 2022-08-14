/*function recurse(){
    //function code
    recurse();
}
recurse();
*/

// Two ways of Thinking

// write a function pow(x,n) that raises x to a natural power of  n.multiply x by itself n times.

// 1. Iterative Thinking.
// function pow(x, n) {
//   let result = 1;
//   // multiple result n time in the loop.
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(2, 3));

// // Recursive thinking:simplify the task and call self.
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(2, 3));
// // we can also write same code using  the conditional operator.

// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }

// // Write a program to count down the number to 1
// function countDown(number) {
//   console.log(number);
//   // decrease the number value
//   const newNumber = number - 1;

//   // base Case
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }
// countDown(4);

// Recursive traversal
// recursive traversal is a application of recursive.

let company = {
  sales: [
    { name: "john", salary: 1000 },
    { name: "alice", salary: 1000 },
  ],
  development: {
    sites: [
      { name: "peter", salary: 2000 },
      { name: "alex", salary: 1800 },
    ],

    internals: [{ name: "jack", salary: 1300 }],
  },
};

function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev,current)=>{
            prev+current.salary,0
        });
    }
    else{
        let sum=0;
        for(let subdep of Object.values(department)){
            console.log(subdep);
            sum +=sumSalaries(subdep);
        }
      
        console.log(sum) ;
    }
}
console.log(sumSalaries(company));

// Recursive structure
// A  recursive data structure is a structure that replicate itself in parts.

