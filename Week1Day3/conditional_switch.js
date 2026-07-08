//A switch statement is a conditional statement that executes one block of code from 
// multiple options based on the value of an expression.


let alertType="modal"

switch (alertType) {
    case "simple":
        console.log("Simple alert");
        break
    case "confirm":
        console.log("confirm alert");
        break
    case "prompt":
        console.log("prompt alert");
        break
    default:
        console.log("invalid alert");
        break
}