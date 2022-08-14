// Date And Time
/* Date is a built in object that store the date and time and provide method for date/time management */

// To create a Date object 
// To create a Date object call new Date().

// new Date()
// When we create a Date object without any argument it will create an object with current date and time.

let now  = new Date();
console.log(now);

// new Date (milliseconds)
// It create a Date object with the time equal to number of millisecond passed after the jan 1st of 1970.
let Jan01_1970= new Date(0);
console.log(Jan01_1970);

let jan02_1970=new Date(24*3600*1000);
console.log(jan02_1970);

// We can always create a date from a timestamp using new Date() and convert the existing Date object to a timestamp using the date.getTime() method.

// Dates before 01.01.1970 have negative timestamps
let Dec31_1969=new Date(-24*3600*1000);
console.log(Dec31_1969);

// new Date(datestring)
// If we have a single argument, and it's a string then it is parsed automatically.
let date = new Date("2017-01-26");
console.log(date);

// new Date(year,month,date,hours,minutes,seconds,ms)
/*
The year should have four digit.2 digit are also accepted in year but always use fouur digit.
The month count start with 0(jan) upto 11(Dec)
The date parameter is actually the day of the month,if date parameter is absent it is assumed 1.
If hours/minute/seconds/ms is absent,they are assumed to be equal to 0
 */

date= new Date(2022,6,26,)
console.log(date);

// Access date components
// We have method to access the year,month , date and so on from the Date object.
/*
getFullYear()
getMonth()
getDate()
getHour()
getMinute()
getSeconds()
getMilliseconds()
We can also get the day of week with the getDay() method:
0 (sunday) to 6(saturday)
 */

// If the local time zone is shifted to UTC , the the cose shows different hours

 date= new Date();
 console.log(date.getHours());
 console.log(date.getUTCHours());

//  Set Date Components
/* These methods allow to set date/time component
setFullYear(year,[month],[date]);
setMonth(month,[date]);
setDate(date);
setHours(hour,[min],[sec],[ms])
setMinute(min,[sec],[ms]);
setSeconds(sec,[ms]);
setMilliseconds(ms);
setTime(milliseconds)(sets the whole day by milliseconds since 01.01.1970)
*/
// some method can set multiple component at once such as setHours.
let today= new Date();
// today.setHours(0)
// console.log(today)
// today.setHours(0,0,0,0)
console.log(today);

// Autocorrection
// If we set values out of range, it will automatically adjust itself.
 date= new Date(2022,10,32)
 console.log(date);

 date= new Date(2016,1,28)
 date.setDate(date.getDate()+2);
 console.log(date);

//  If we want to get the date for "70 seconds after now"
 date= new Date()
 date.setSeconds(date.getSeconds()+70);
 console.log(date);

//  We can set zero or even negative values.
 date= new Date(2022,6,)
 date.setDate(23);
 console.log(date);

 date.setDate(0)
 console.log(date);

//  
// Date to number,date diff
// When a Date object is converted to number ,it become a timestamp same as date.getTime
date= new Date();
console.log(+date)//the number of milliseconds
// The dates can be subtracted ,the result is the difference in milliseconds.

let start= new Date();
for(let i=0;i<100000;i++){
let doSomething=i*i*i;
};
let end=new Date();
console.log(`The loop took ${end-start}ms`);


// Date.now()
/*
If we only want to create time,we don't need the date object.
We have a method Date.now() that return the current timestamp.
It is mostly used for convenience or when performance matter.

*/
start= Date.now();
for(let i=0;i<100000;i++){
    let doSomething=i*i*i;
}
end=Date.now();
console.log(`The loop took ${end-start}ms`);

// Benchmarking
// The performance measurements between two Dates is called "benchmarks"

function diffSubtract(date1,date2){
    return date2-date1;

}

function diffGetTime(date1,date2){
 return date2.getTime()-date1.getTime()
}
function bench(f){
    let date1=new Date(0);
    let date2= new Date();

    let start= Date.now();
    for(let i=0;i<100000;i++) f(date1,date2);
    return Date.now-start;
}
console.log("Time of diffSubtract" + bench(diffSubtract)+"ms");
console.log("Time of diffGetTIme" + bench(diffGetTime)+"ms");


// Date.parse from a string
/*
This method Date.parse(str) can read a date from a string.
The string format should be: YYYY-MM-DDTHH:mm:ss:sssZ
YYYY-MM-DD- is the date: year-month-day
The character T is the delimiter
HH:mm:ss:sss-is the time:hours,minute,seconds and milliseconds.
Z denote the time zone
*/

let ms= Date.parse("2022-06-26T13:51:50.417-07:00");
console.log(ms);

// We can create a new Date object from the timestamp:
 date= new Date(Date.parse("2022-06-27T00:37:50.417-07:00"));
 console.log(date);