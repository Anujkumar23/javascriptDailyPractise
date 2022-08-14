// F.prototype
// As new Objects can be created with constructor function,like new F().
// If F.prototype is a object the new operator uses it to set [[prototype]] for the object.

// Example
// let animal={
//     eats:true,
//     name:"rabbit"
// };

// function Rabbit(name){
//     this.name=name;

// }
// Rabbit.prototype=animal;

// let rabbit=new Rabbit("white Rabbit");

// console.log(rabbit.eats);
// console.log(rabbit.name);

// When a new object is created from the function constructor then set the [[prototype]] of that object to the animal.

// F.prototype property is only used when new F() is called, it assign [[prototype ]] of the new object.

// Default F.prtotype,constructor property
// Every function has the "prototype" property.
function Rabbit(){
    // Rabbit.prototype={
        // jumps:true
    // }

}
console.log(Rabbit.prototype);
console.log(Rabbit.prototype.constructor);
// console.log(Rabbit.prototype.constructor==Rabbit);
    
let rabbit=new Rabbit();
console.log(rabbit.prototype);
console.log(rabbit.constructor);
console.log(rabbit.constructor==Rabbit);


// function Rabbit(name){
//     this.name=name;
//     console.log(name);
// }
//  rabbit =new Rabbit("white Rabbit");
//  console.log(rabbit.constructor);
//  let rabbit2=new rabbit.constructor("black Rabbit")
//  console.log(rabbit2);

 function Rabbit(){
}
Rabbit.prototype={
    jumps:true
    
};
// console.log(Rabbit.constructor)
console.log(Rabbit.prototype);
 console.log(Rabbit.prototype.constructor);
rabbit =new Rabbit();
console.log(rabbit.constructor);
console.log(rabbit.constructor==Object);
console.log(rabbit.constructor==Rabbit);

// We can choose to add/remove properties to default "prototype" instead of overwriting it.
function Rabbit(){

}
// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps=true
console.log(Rabbit.prototype.jumps);
console.log(Rabbit.prototype.constructor);

// Recreate the constructor property manually.
Rabbit.prototype={
    jumps:true,
    constructor:Rabbit
}
// console.log(Rabbit.constructor)
console.log(Rabbit.prototype.constructor)

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

rabbit = new Rabbit();
// Rabbit.prototype.eats = false;
delete rabbit.eats;
// Rabbit.prototype = {};
// console.log(Rabbit.prototype)
// console.log(Rabbit.prototype.constructor)
// console.log(rabbit.constructor)

console.log( rabbit.eats );



