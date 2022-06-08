// const message;
// console.log(message);


// const message;
// message ="helloworld"
// console.log(message);


const message= "helloworld";
console.log(message,"line11");
  {
      const message= "hello"
      console.log(message,"line14");
  }


  function scope(){
      const message = "helloguys";
      console.log(message,"line20");


  }
  scope();

  function printValue(){

    for(let i=0;i<10;i++){
      const message= "hey"
      console.log(message,"line30");
      
  }
  console.log(message,"line33")
}
printValue();

const COLOR_RED="#F00"
let color= COLOR_RED;
console.log(color);

