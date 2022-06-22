let firstName= null;
let secondName= null;
let nickName= "supercoder"

console.log(firstName||secondName||nickName||"Anonymous");


let height=0;
console.log(height||100);//Or operator treated ) as falsy value then it goes to second and second value is true .

console.log(height??100);//?? operator find first value is defined so print first value.

