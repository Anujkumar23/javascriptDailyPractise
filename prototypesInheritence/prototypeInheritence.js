// Prototypal Inheritence
// For instance we have a user objectwith its properties and methods,and want to make admin and guest slightly modified varients of it.
// Prototypal Inheritence is a language feature that helps in that.

// Object have a hidden property [[prototype]] ,that is either null or reference another object.That object is called a "prototype".
// When we read a property from object,and it is missing.Javascript automatically take it from the prototype. In programming it is called  "prototypal inheritence".
// The property [[prototype]] is internal and hidden ,but there are many way to set it.
// One of them is to use the special name _proto_,

let animal={
    eats:true
};
let rabbit={
    jumps:true
};
rabbit.__proto__=animal;//sets rabbit.[[Prototype]]=animal
// if we read a property from rabbit,and it's missing javascript take it from prototype that is animal.

// We can find both property in rabbit now.
console.log(rabbit.jumps);
console.log(rabbit.eats);
// When console.log tries to read property rabbit.eats ,it's not in rabbit,So javascript follow the [[Prototype]] reference and finds it in animal

// Here "animal" is the prototype of "rabbit" or rabbit prototypically inherits from animal.
// If animal has a lot of useful property and methods, then they become automatically available in rabbit

// If we have a method in animal it can be called on rabbit.

animal={
    eats:true,
    walk(){
        console.log("Animal Walk")
    }
}
rabbit={
    jumps:true,
    __proto__:animal
};
rabbit.walk();

// Prototype chain
animal={
    eats:true,
    walk(){
        console.log("Animal Walk")
    }
}
rabbit={
    jumps:true,
    __proto__:animal
};
let longEar={
    earLength:10,
    __proto__:rabbit
}
longEar.walk();
console.log(longEar.jumps);

// Writing does not use prototype
// The Prototype is only used for reading properties
// Write/delete operation work directly with the object.


animal={
    eats:true,
    walk(){
        console.log("Animal Walk")
    }
}
rabbit={
    jumps:true,
    __proto__:animal
};
rabbit.walk=function(){
    console.log("Rabbit! bounce bounce");
}
rabbit.walk();
// Here rabbit.walk() finds the method immidiately in the object and executes it without using the prototype.


// Setter function
let user={
    name:"john",
    surName:"Smith",

    get fullName(){
        return `${this.name} ${this.surName}`
    },
    set fullName(value){
        [this.name,this.surName]=value.split(" ")
    }

};

let admin={
    __proto__:user,
    isAdmin:true
};

console.log(admin.fullName);
console.log(user.fullName);

admin.fullName="Alice Cooper"
user.fullName="john Doe"
console.log(admin.fullName);
console.log(user.fullName);

// The value of "this"
// The this is not affected by prototypes at all.
// No matter  where the method is found: in an object or its prototype.In a method call, this is always the object before the dot.
animal={
    
    walk(){
        if(!this.isSleeping){
            console.log("I walk");
        }
    },
    sleep(){
        this.isSleeping=true;
    }
};
rabbit={
   name:"white Rabbit",
    __proto__:animal
};
rabbit.sleep();
// animal.sleep();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping);

// for..in loop

// The for..in loop itrates over inherited properties too.
animal={
    eats:true

}
 rabbit={
    jumps:true,
    __proto__:animal
};
console.log(Object.keys(rabbit));

for(let prop in rabbit){
    console.log(prop);
}

for(let prop in rabbit){
    let isOwn= rabbit.hasOwnProperty(prop);
    if(isOwn){
        console.log(`Our:${prop}`)
    }
    else{
        console.log(`Inherited:${prop}`);
    }
}

// All other key/value-getting methods, such as Object.keys,Object.values,and ignore inherited properties.



