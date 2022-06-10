let year= prompt("In which year was the ECMAScript -2015 specification publish?","");

if(year<2015){
    console.log("too early");
}
else if(year>2015){
    console.log("too late");
}
else{
    console.log(`Exactly ${year}`);
}