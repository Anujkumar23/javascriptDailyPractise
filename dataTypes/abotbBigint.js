// const bigint= 123456789n;


const samebigint= BigInt("1234567")
console.log(samebigint)

const bigintFromNumber=BigInt(10);
console.log(bigintFromNumber)


console.log(1n +2n);

console.log(5n/2n);


// console.log(1n+2);//we cant mix bigint with number

let bigint=1n;

let number=2;

// number to bigint
console.log(bigint+BigInt(number));

//  BigInt to Number
console.log(Number(bigint)+number);


console.log(2n>1n);
console.log(2n>1);
console.log(1==1n)
console.log(1===1n);

if(1n){
    console.log("h")
}


if(0n){
    console.log("never execute");
}
