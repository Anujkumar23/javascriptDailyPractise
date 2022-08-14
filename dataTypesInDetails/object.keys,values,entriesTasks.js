// Write the function sumSalaries(salaries) that return the sum of all salaries using object.values and the for ..of loop

function sumSalaries(salaries){
    sum=0;
    for(let salary of Object.values(salaries)){
        sum+=salary
    }
    return sum;
}

let salaries={
    "john":100,
    "pete":300,
    "Mary":250
}
console.log(sumSalaries(salaries));

// 2nd solution with reduce
function sumSalaries(salaries){
    return Object.values(salaries).reduce((sum,curr)=>{
        sum =sum+curr
    return sum;}
        
    
    )
}
 salaries={
    "john":100,
    "pete":300,
    "Mary":250
}
console.log(sumSalaries(salaries));