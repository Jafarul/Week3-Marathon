//if statement: Executes a block of code only if a specified condition is true.

let a=10
if (a==10) {
    console.log("statement 1 is executed");
    }

//if_else: Executes one block of code if the condition is true, otherwise executes 
// another block.

let age=19
if (age>18) {
    console.log("Eligible to vote");
    
} else {
    console.log("Not Eligible");
    
}

//Else if: used to check mutiple conditions

function student(marks){
//let marks=40
if (marks>80) {
    console.log("distinction");
    
} else if(marks>60){
    console.log("First Class");
    
} else{
    console.log("second class");
    
}
}
student(90)
