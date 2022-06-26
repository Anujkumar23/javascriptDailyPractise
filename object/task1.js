// // 
// function makeUser(){
//     return{
//         name:"john",
//         ref :this
//     };
// }

// let user= makeUser();
// console.log(user.ref.name);


let ladder= {
    step:0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    showStep:function(){
        console.log(this.step);
    }
};

ladder.up()
ladder.up()
ladder.down()
ladder.showStep()
ladder.down()
ladder.showStep();