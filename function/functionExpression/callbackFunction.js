function ask(question,ok,cancel){
    if(confirm(question)){
        ok();
    }
    else{
        cancel();
    }
}

function showOk(){
    console.log("you agreed");
}
function showCancel(){
    console.log("you cancel the execution")
}
ask("Do you agree",showOk,showCancel)


function ask(question,yes, no){
    if(confirm(question)){
        yes();
    }
    else{
        no();
    }
}
ask('do  you agree',function(){console.log("you agreed")},function(){
    console.log("you cancel the execution")
})