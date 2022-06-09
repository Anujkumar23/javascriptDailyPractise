var name1=Symbol("anuj");

var name2= Symbol("anuj")

console.log(name1==name2);


let id= Symbol("id");

let person ={
    name:"anuj",
    age:22,
    [id]:123


};
for(key in person){
console.log(key);
}
