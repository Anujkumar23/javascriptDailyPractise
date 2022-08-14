//JSON Methods
// Lets assume we have a complex object ,and we would like to convert it to string to send it on a Network. This string should include all important properties.

let user={
    name:"john",
    age:30,
    toString(){
        return`name:${this.name},age:${this.age}`;
    }
}
console.log(user.toString());


// JSON.stringyfy
/* The JSON(javascript Object Notation) is a general format to represent values and objects. JSON is used for data exchange when the clients use javascript and server is written on php/Ruby.

JSON.stringyfy to convert objects into JSON(string).
JSON.parse to  convert JSON(string) back into an object.
*/

// Example of JSON.stringify
let student={
    name:"john",
    age:30,
    isAdmin:false,
    courses:['html','css','js'],
    spouse:null
};
let json= JSON.stringify(student);
console.log(typeof json);
console.log(json);
/*
The method JSON.stringify takes the object and convert it into a string.
json string is also called a JSON -encoded or serialized or stringified object 
In JSON strings used double quotes.No single quotes or backticks in JSON. So 'John' becomes "John".
Object propery names are double -quoted also. so age:30 becomes "age":30.
JSON.stringify can applied to primitive as well.
It support following datatypes.
Objects
Arrays
strings 
Number
null
*/

let a=JSON.stringify(1);
console.log(typeof a);
let b=JSON.stringify( 'test');
console.log(typeof b);
let c= JSON.stringify( true);
console.log(typeof c);
let d= JSON.stringify([1,2,3]);
console.log(typeof d);

// Some Javascript -specific object properties are skipped by JSON.stringify.
// Function properties
// symbolic keys and values.
// property that stores undefined.

// user={
//     sayHi(){
//         console.log("hello");
//     },
//     [symbol("id")]:123,
//     something:undefined
// };
// console.log(JSON.stringify(user));

// Nested object are supported and converted automatically.

let meetup={
    title:"Conference",
    room:{
        number:23,
        participantas:["john","ann"]
    }
};
console.log(JSON.stringify(meetup));

//No circular reference

// let room={
//     number:23
// };

// meetup={
//     title:"Conference",
//     participantas:["john","ann"]

// };
// meetup.place=room;
// room.occupiedBy=meetup;
// JSON.stringify(meetup); //converting circular structure to json.

// Custom "toJSON"
// As tostring for string conversion, an object provide method toJSON for to-JSON conversion. 

let room={
    number:23
};

 meetup={
    title:"conference",
    date:new Date(Date.UTC(2017,0,1)),
    room
};

console.log(JSON.stringify(meetup));
// Here date become a string, because all dates have a bulitin toJSON method.

// Add a custom toJSON for object room

room= {
    number:23,
    toJSON(){
        return this.number
    }
};

 meetup={
    title:"conference",
    room
};
console.log(JSON.stringify(room));
console.log(JSON.stringify(meetup));

// JSON.parse
// JSON.parse change the json(string) back to object.
// JSON.parse(str,[reviver]);
// str- JSON -string to parse.
// reviver- this is a optional function (key, value) that will be called for each(key,value)pair and can transform the value.

let numbers="[0,1,2,3]"
numbers=JSON.parse(numbers);
console.log(numbers[1]);

// For Nested Object
let userData= '{"name":"john","age":35,"isAdmin":false,"friends":[0,1,2,3]}';
 user= JSON.parse(userData);
 console.log(user.friends[1]);
 console.log( user.age);
//  object and array can includes other objects and array. But they must obey the same JSON format.
// typical mistake in handwritten- JSON

// let json='{
//     name:"john",                       mistake:property name without quotes
//     "surname":'smith',                 mistake:single quotes in value(must be double)
//     'isadmin':false,                   mistake:single quotes in key(must be double)
//     "birthday":new Date(2000,2,3),     mistake:no new is allowed
//     "friends":[0,1,2,3]
// }';

// JSON does not suppport comment .Adding a comment in JSON makes it invalid.

// Using reviver
let str='{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// Now we need to turn back it into a js object.
meetup= JSON.parse(str);
console.log(meetup.date.getDate());//Error
// The value meetup.date is a string not a Date object.So we need to transform that string into a date object.
// Pass the JSON.parse the reviewing function as the second argument,it will return all value as it is but date will bacome a Date.

str='{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
meetup= JSON.parse(str,function(key,value){
    if (key=="date"){
        return new Date (value);
    }
    return value;
})
console.log(meetup.date.getDate());



