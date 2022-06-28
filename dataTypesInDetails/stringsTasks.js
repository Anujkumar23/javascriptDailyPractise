// let str="Hello";
// str.test=5;
// console.log(str.test);

// 1.
function ucFirst(str){
   return  str[0].toUpperCase()+str.slice(1)
}
console.log(ucFirst("john"));


// 2.
function checkspam(str){
    let lowerCase=str.toLowerCase();
    return lowerCase.includes("world")||lowerCase.includes("rabbit")
   
    

}
console.log(checkspam("Hello WORLD"))


// 3.
function truncate(str,maxlength){
    return (str.length>maxlength)?str.slice(0,maxlength)+"...":str
}
console.log(truncate("What I'd like to tell on this topic is:", 20));