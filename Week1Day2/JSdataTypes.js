
/* -shift+alt+A, paragraph comment
Ctrl+/ -single line comment 

variable name and file name can created using camelcase : first word in lowercase and second word in uppercase
class name-> pascal case (starts with uppercase) */

/* Datatypes -> specify the type of data the variable is holding

1. Primitive datatype :In built datatypes, once created cannot be changed so we say it has immutable.

number
string
boolean
undefined
null
bigint

2. Non Primitive datatype : user defined datatype, these are mutable.

objects
arrays
*/


//number, whole number, float, decimal
//-(2^53-1) to (2^53-1)

var phoneNumber=7358786550
var num=0.5
console.log(phoneNumber);
console.log(typeof phoneNumber);



//string- represented using,"",'',``(the key above your tab key-backticks)

var empName="Gauthami@"
console.log(empName); //
console.log(typeof empName);

//boolean-> either it can be true or false
var hasPlaywright=true
console.log(hasPlaywright);  //true
console.log(typeof hasPlaywright) //boolean

//undefined-> undefined means a value has not been assigned yet and may be assigned later at runtime.

var accountNumber
console.log(accountNumber);   //undefined
console.log(typeof accountNumber); //undefined

//null->null means the value is intentionally set to "no value" or "empty."

var landLine=null
console.log(landLine)  //null
console.log(typeof landLine) //object

//bigint - bigint is used to store very large integers beyond JavaScript's Number limit (2^53 - 1).

var transactionID=12345678910111247n
console.log(transactionID)
console.log(typeof transactionID)













