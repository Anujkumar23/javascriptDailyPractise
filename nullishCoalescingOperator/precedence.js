let height = null;
let width = null;

//need to use parantheses otherwiswe * will execute first and result will be incorrect
let area = (height ?? 100) * (width ?? 50);
console.log(area);

//syntax error
// let x=1 && 2 ?? 3


x = (1 && 2) ?? 3;
console.log(x);
