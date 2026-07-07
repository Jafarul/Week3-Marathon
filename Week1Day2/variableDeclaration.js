
//variable declaration
//var companyName

//Value Assignment to the variable
//companyName="Testleaf"

//var allows redeclaration and reassignment
//This is called declaration + initialization in a single statement.

var companyName="Testleaf"
var companyName="Qeagle"

companyName="HCL"
companyName=12345 //dynamic typing
console.log(companyName);

//let does not allow redeclaration but reassignment is allowed

let course="Selenium"
//let course="Playwright" //SyntaxError: Identifier 'course' has already been declared, redeclaration is not possible

course="Python" //reassignment is possible
console.log(course);

//const -> can not be redeclared and reassigned.

const pi=3.14
//const pi=4.12 //SyntaxError: Identifier 'pi' has already been declared

pi=5.6  //TypeError: Assignment to constant variable.
console.log(pi);


