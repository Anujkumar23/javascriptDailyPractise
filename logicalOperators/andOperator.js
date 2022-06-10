let  hour =12;
let minute = 30;

if (hour==12 && minute==30){
    console.log(`The time is ${hour}:${minute}`);
}


if(1&&0){
    console.log();// it will not work because  it treat 1 as true and 0 as false and true&& false = false
}
  console.log(1&&0);//0
  console.log(1&&5);//5
  console.log(null&&5);//null
  console.log(0&&"no matter what");
  

  console.log(1&&2&&null&&3);// null
  console.log(1&&2&&3)//3

console.log(1&&2||2&&3)//2


