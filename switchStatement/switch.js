// let a=2+2;
// switch(a){
//     case 3:
//         console.log("too small");
//         break;

//     case 4:
//         console.log("exactly!");
//         break;

//     case 5:
//         console.log("too big");
//         break;
//     default:
//         console.log("I don't know such value")

// }

// Without break it will execute all the cases after equality matches
// let a=2+2;
// switch(a){
//     case 3:
//         console.log("too small");

//     case 4:
//         console.log("exactly!");

//     case 5:
//         console.log("too big");

//     default:
//         console.log("I don't know such value")

// }

// let x = "1";
// let y = 0;

// switch (+x) {
//   case y + 1:
//     console.log("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     console.log("this doesn't run ");
// }

// // Grouping of "case"
// let a = 3;
// switch (a) {
//   case 4:
//     console.log("right");

//   case 3:
//   case 5:
//     console.log("Wrong!");
//     console.log("Why don't you take a math class?");
//     break;

//   default:
//     console.log("The result is strange. Really.");
// }

let arg= prompt("Enter a number");

switch(arg){
    case '0':
    case '1':
     console.log("Zero or one");
     break;
    case "2":
        console.log("two");
        break;

    case 3:
        console.log("Never execute");
        break;

    default:
        console.log("an unknown value");
        



}
