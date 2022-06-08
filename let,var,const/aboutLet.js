// gives undefined
let message;
message= "hello";
console.log(message, "from line4");





{
let message= "Helloworld"
console.log(message,"line number 12");
}

console.log(message, "line number 15");

function scope(){
    let message ="helloguys";
    console.log(message, "line number 19");
}
scope();

function printValues(){
    for(let i=0;i<10;i++){
        let name=  `anuj${i++}`
        console.log(name);
    }
    console.log(name);
}
printValue();

