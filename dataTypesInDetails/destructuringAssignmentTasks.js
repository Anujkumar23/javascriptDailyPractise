// write a destructuring object
let users={
    name:"john",
    years:30
}

let{name,years:age,isAdmin:isAdmin=false}=users;
console.log(name);
console.log(age);
console.log(isAdmin);

// create a functiom topSalary(salaries) that return the name of the top  person.

function topSalary(salaries){
    let maxSalary=0;
    let maxName=null;

    for(let [name,salary]of Object.entries(salaries)){
        if(maxSalary<salary){
            maxSalary=salary;
            maxName=name;
        }

    }
    return maxName;

}
let salaries={
    "john":100,
    "Pete":300,
    "Mary":250
}
console.log(topSalary(salaries));