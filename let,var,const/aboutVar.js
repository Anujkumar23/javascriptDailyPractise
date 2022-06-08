var message;
message = "hello"
console.log(message, "line 3");


{
var message = "helloworld"
console.log(message, "line number 8");
var msg= "hey"

}

function scope(){
    var message = "helloguys"
    console.log(message, "line 14")
    
}
scope();
console.log(msg,"line 19")
console.log(message,"line 20")


function printValue(){

    for(let i=0;i<10;i++){
        // var name= "anuj"+ i
        var name= `anuj ${i+1}`
        console.log(msg);
        console.log(name)
    }
    console.log(name);
}
printValue();

