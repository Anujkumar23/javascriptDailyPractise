// Numeric conversion happens in mathematical functions and expressions automatically.
console.log( "6" / "2" );


// We can use the Number(value) function to explicitly convert a value to a number  

let str = "123";
console.log(typeof str);

str =  Number(str);
console.log(typeof str);

// If the string is not a valid number, the result of such a conversion is NaN.


console.log( Number("   123   ") ); 
console.log( Number("123z") );      
console.log( Number(true) );       
console.log( Number(false) );    


str= "3.14"
console.log(typeof str);

str= parseFloat(str)
console.log(typeof str)

str= "1346"
console.log(typeof str)

str= parseInt(str)
console.log(typeof str);

let num= "5"
num=+num;
console.log(num)
