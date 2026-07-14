//Named function or function declaration

/* function name(params) {
    //body
}
name() //arguments */

function sum(x,y){
    // let x=17
    // let y=16
    let z=x+y
    //console.log(z)
    return z
    
}
console.log(sum(1,2)) //3
console.log(sum(12,65)) //77


//function expression/Anynomous function

let funExp=function(){
console.log("This is an function expression");

}
funExp()

//Arrow function

const funArrow=(a,b)=>a+b
console.log(funArrow(12,16))

//square the number
const sq=(num)=>{
    return num*num
}
console.log(sq(5)) //25


//callback-> one function is passed as an argument to another function

function add(a,b,cb){ //parameters a=13, b=11, cb=sub(callback function)
let add1=a+b
console.log("the sum of the values",add1)
cb(add1)// cb is callback function and add1 is argu to callback function that passes the value of add1

}
function sub(d){ //parameter d=add1=result of a+b
console.log(" subtraction",d);

}
add(13,11,sub) //arguments


