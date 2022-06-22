// // l.what is the last value alerted by this code? Why?
// let i=3;
// while(i){
//     alert(i--)// it will return 3,2,1 because first old value will print then decrement and whe i=0 loops stop execution .
// } 


// // 2.
// let i=0;
// while(++i<5){
//     alert(i);//in this case when condition is checked the value of i is increment by 1 then compared  with 5 and alert will show the value if condition is true  so the value are like this 1,2,3,4
// }

// i=0;
// while(i++<5){
//     alert(i);//In this condition value is increment but old value is comparred with 5 and in alert the updated value is shown that is 1,2,3,4,5
// }


// // 3.
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// // this postfix form show the value like: 0,1,2,3,4

// for(let i=0;i<5;++i){
//     console.log(i);//this prefix form show  the value of i like:0, 1,2,3,4
// }

// // 4. output even number between 2 to 10
// let i=2;
// for (i=2;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// 5.replace for with while.
for(let i=0;i<3;i++){
    alert(`number${i}`);
}

// let i=0;
// while(i<3){
//     alert(`number ${i}`);
//     i++;
// }


