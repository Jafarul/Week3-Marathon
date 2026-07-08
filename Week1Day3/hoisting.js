/* Hoisting is JavaScript's default behavior of moving variable and function declarations to the
 top of their scope before the code is executed. */

//var is hoisted, and if you access it before initialization, JavaScript returns undefined.

console.log(x) //undefined
var x=10   

/* internally
var x
console.log(x)
x=10
*/

//let is hoisted but cannot be accessed before initialization, resulting in a ReferenceError.

console.log(y);  //ReferenceError: Cannot access 'y' before initialization
let y=20

/* internally
let y
console.log(y)
y=20
*/

//TDZ(temporal dead zone): time period between variable declaration and value assigment to the variable

//const

console.log(z);  //ReferenceError: Cannot access 'z' before initialization
const z=30

/* internally
let z
console.log(z)
z=30
*/