// 1.What is the code below going to output?
 console.log(null||2||undefined)//2

// 2.What is the result  of OR'ed alerts
// console.log (alert(1)||2||alert(3))//1
console.log(alert(0)||1||undefined)

// 3. what is the result of And
alert(1&&null&&2);//null

console.log(alert(0)||1)

// 4.What will be the code Show.
console.log(alert(1)&&alert(2));

// 5.The resulr of OR AND OR

alert(null||2&&3||4);//null||3||4 ==>3


// 6.Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.


let age= prompt("enter your age")
if(age>=14&&age<=90){
    console.log(age);
};

// 7.Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

age= prompt("enter your age");
if(!age>=14&&age<=90){
    console.log(age);
}

age= prompt("enter your age");
if(age<14||age>90){
    console.log(age)
}


// 8.Which of these alerts are going to execute?
if (-1 || 0) alert( 'first' );//true ||false  return true so answer is -1
if (-1 && 0) alert( 'second' );//true&&false return false  so condition will not execute
if (null || -1 && 1) alert( 'third' );//null || true&& true retrn  null ||1 return 1 so condition will execute.

// 9.
let visitor= prompt("Who is there","");

if(visitor==""){
 console.log("I dont know you")
}
else if(visitor== false ){
    console.log("canceled")
}else if(visitor==="Admin"){

    let password= prompt("password", );
    if(password==="TheMaster"){
        console.log("welcome");
    }
    else if(password===false||password===" "){
        console.log("canceled");
    }
    else  {
        console.log("wrong Password");
    }
}