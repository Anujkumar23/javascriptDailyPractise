// create a function A and B so that new A()== new B()?

let obj={
    name:"anuj"
}

function A(){
    return obj;
}

function B(){
    return obj;
}

console.log(new A()==new B());


function Calculator(){
    this.read= function(){
        this.a= +prompt("a",0);
        this.b= +prompt("b",0)
    }

    this.sum= function(){
        return this.a  +  this.b
    }

    this.mul=function(){
        return this.a*this.b;
    }
}
let calculator= new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());