// The Textual data is stored in strings.

// Quotes
/*we can define strings with three form
1. Single Quote
2.Double Quote
3. Backticks
single and double quotes are basically same . But in Backticks we can add variable and expression into string ,by wrapping it in ${}.
With the backticks we can write multiple lines.But it is not possible in single and double quotes. 
*/

let single = "single -quoted"
let double= "double -quoted"
let backtics= `backticks`

function sum(a,b){
    return a+b
}
console.log(`1+2=${sum(1,2)}`);


// Multiple lines
let guestList=`guest:
*john
*pete
*Mary
`;
console.log(guestList);

// Special Character
/*We can create multiple line strings with single and double quotes by using "newline character" \n
All Special character start with \ called as escape character.
We use this escape character if we want to add quote in our sentence.
If we need to show a \ in our string we need to use double \\.

*/


 guestList="Guest:\n *john\n *Mary"
 console.log(guestList);


 let str1= "Hello\n World"
 let str2=`Hello
 World`
 console.log(str1);
 console.log(str2);
 console.log(str1==str2)

//  Example with Unicode
console.log("\u00A9");
console.log("\u{20331}");
console.log('\u{1F60D}');

// String Length
// The length propery gives the length of the string.
//   str.length is a property not a function so it is written like str.length not str.length(). 
let strr= "helloworld"
console.log(strr.length);


// Accessing Character
/*We use square bracket [pos]to access a character postion or call the method str.charAt(pos).
The square Bracket are a moodern way to getting a character , and charAt is the older method.
The diff b/w [] and charAt is that [] method return undefined if no character found and charAt gives an empty string.

*/

let str= `Hello`
console.log(str[5]);
console.log(str[4]);
console.log(str.charAt(3));
console.log(str.charAt(5));

// We can also itrate over the string using for..of
for (let char of str){
console.log(char);
}

// Strings are immutable 
/*String can not be changes in JS.
It is impossible to change a character */

str= "helloworld"
str[0]="H"
console.log(str[0]);

// create a new string and assign it to str 
str= "hii"
str= "H"+str[1]+str[2]
console.log(str);

// Chaging the Case
// toLowerCase() and toUpperCase() change the Case


 str= "helloworld"
// in upper case
console.log(str.toUpperCase());
str= "HELLOWORLD"
// in lowerCase
console.log(str.toLowerCase());

// if we want a single number in lowercase
console.log(str[0].toLowerCase());

// Seraching for a substring
// we can search a substring from a string with the method str.indexOf(substr,pos)


str= "helloworld  world"
console.log(str.indexOf("owo",0));//4
console.log(str.indexOf("Owo",0));// return -1 because the substring is not found.
console.log(str.indexOf('world'))//5


// There is a convenience with index of in the if test.

str= "Widget with id";
if(str.indexOf("widgit")){
    console.log("we found it"); //doesn't work
}

str="Widget with id";
if(str.indexOf("widgit")!=-1){
    console.log("We found it")
}

// If we want all the occurance we can run indexof in a loop and new call is made with the position after the previous match.
  str= "As sly as a fox, as strong as an ox."
 let target = "as";

 pos= 0;
 while(true){
    let foundPos=str.indexOf(target,pos)
    if(foundPos==-1){
        break;
    }
    console.log(`${foundPos}`)
    pos=foundPos+1;
 }


// str.lastIndexOf(substr,pos)
/*
in lastIndexOf it will start searching from ending to the beginning.
It list the occurance in reverse order. 
*/

str= "As sly as a fox, as strong as an ox."
console.log(str.lastIndexOf("as", 26))



// include,startWith ,endsWith
// str.includes(substr,pos) return true if str contain substr and false if not.
str= "Widgit with id"
console.log(str.includes("with"));
console.log(str.includes("it",4))
console.log(str.includes("it",6));


// starWith
str= "Widgit with id"
console.log(str.startsWith("Widgit"));
console.log(str.startsWith("widgit"));
console.log(str.startsWith("widgit",5))

// endsWith
console.log(str.endsWith("id",))
console.log(str.endsWith("Widgit",1));

// Getting a subString
// There is a three methods in Js to get a substring: substring,substr,slice

// 1.str.slice
/*
 It return the part of the string from start to end (not including end value)
 If there is no second argument, then slice goes till the end of the String.
 We can also give negative value in start and end but then it start counted from the string end.
*/
str="stringify"
console.log(str.slice(0,5));//"strin"
console.log(str.slice(0,1));//"s"

console.log(str.slice(2));//ringify

console.log(str.slice(-4,-1))

// 2.str.substring(start,end)
/*
It return the part of the string b/w start and the end.
It is same as slice but it allow the start to be greater than end.
Negative argument are not supported in str.substring.
*/
str= "stringify"
console.log(str.substring(2,6))
console.log(str.substring(6,2))

// 3.str.substr
/*
It return the part of string from start with the given length.
Here it take second argument as length unlike substring and slice.
It can  take first argument as negative so count start fron string end.
The length of the substr is start from the start 
 */
string= "stringify"
console.log(string.substr(2,4));
console.log(string.substr(-4,2));

// Comparing strings
/* String are compared character by character in alphabetical order.
All the lowercase letter go after uppercase letter because their code are greater.
The compare string according to the language use  str.localeCompare(str2) otherwise they are compared by character code.
Return a negative number if str is less than str2
Return a positive number if str is greater than str2
Return 0 if they are epuivalent.

 */

console.log("a">"Z");//true


// str.codepointAt(pos) returns the code of the character.
console.log("z".codePointAt(0));
console.log("a".codePointAt(0));
console.log("Z".codePointAt(0));
console.log("A".codePointAt(0));

// str.fromCodePoint(code)
// Create a character by its numeric code
console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(91));
console.log(String.fromCodePoint(101));

// We  can also add Unicode character by there code using \u  follow by the hex code
console.log("\u005a");




//print all character with code 65...220

let val=''
for(let i=65;i<=220;i++){
    val+=String.fromCodePoint(i);
}
console.log(val);



