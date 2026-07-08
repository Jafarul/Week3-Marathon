//scoping -> visibility or accessibility of the varaible in the script.

/* block scoped
function scoped
global scoped */

//let and const-block scoped 
//var is function scoped
//var,let and const-> all can be declared as global scope 


//Global variable browserVersion

let browserVersion=160

function invokeBrowser(){

//function scoped variable browser

let browser="chrome"

if(browser=="chrome"){

//block scoped variable browserName

    var browserName="edge"  //Accessible inside and outside the block as var is function scoped

    //let browserName="edge"  //Accessible only inside the block as let is block scoped

    //const browserName="edge"  //Accessible only inside the block as const is block scoped

    console.log("the browser name inside the if block",browserName); 

    console.log("the browserVersion inside if block", browserVersion);
     
}

console.log("the browser name outside the if block",browserName);  //ReferenceError: browserName is not defined

}
//console.log("the browser name outside the function block",browserName)//ReferenceError: browserName is not defined

console.log("the browserVersion inside the function", browserVersion)

invokeBrowser()

console.log("the browserVersion outside the function", browserVersion)
