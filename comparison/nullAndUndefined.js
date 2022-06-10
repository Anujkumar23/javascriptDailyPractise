console.log(null==undefined)//true because they equal each other.

console.log(null===undefined)


console.log(null>0); //null  is convertd to 0 in comparison operator  0 cannot be greater 
console.log(null==0);//null can only be equal to undefined so here return false
console.log(null>=0)//true because comparison operator works differnetly then equality operator.here null =0 return true


console.log(undefined>0)//false
console.log(undefined<0)//false
console.log(undefined==0);//false
console.log(undefined==null);//true