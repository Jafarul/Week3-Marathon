//string- represent using '',"",``(back ticks)

/* //string literal-compares datatype and value

let companyName="Testleaf" 
let firmName="Testleaf"
console.log(companyName===firmName)//true
//console.log(companfyName==firmName)//true


//string objects-compares the reference

let firmName1=new String("Testleaf")  //1000
let CompanyName1=new String("Testleaf")//2000
console.log(CompanyName1===firmName1) //false
console.log(CompanyName1==firmName1)//false

console.log(companyName===firmName1); //false
console.log(companyName==firmName1); //true

console.log(firmName1.toString()===CompanyName1.toString())//true */

//length-> to retrieve the length of the string

//index-> starts from 0, p->0, l->1,a->2..
//length-> starts from 1, p->1, l-2...

let course="Playwright"  //index=9, length=10
console.log(course.length)

//string methods

//escape sequence \,\t,\n

// let data='it\'s \ta \nregression test'
// console.log(data);

//concat(),"+", `${}`-template literal  => adding 2 strings
/* 
let v1=50
let v2="Testcases"
console.log("there are", v1 + v2);
console.log((v1.toString()).concat(v2));
console.log(`there are ${v1}${v2}`); */

//charAt()-> to retrieve the character at particular index

let test="Automationa"
console.log(test.charAt(4)); //m
/* 
//indexof() -> to retrieve the index of the character
console.log(test.indexOf("a")) //1st occuring index 5
console.log(test.indexOf("a",6)) //2nd occuring index 10
console.log(test.lastIndexOf());//-1
console.log(test.lastIndexOf("a"));//10 */

//substring()-> extract the portion of the string
// console.log(test.substring(2,4)); //to
// console.log(test.substring(2)); //tomationa
// console.log(test.substring(4,2)) //to
//console.log(test.substring(3,-5)) //(3,0)=>swapped(0,3)=>Aut
//console.log(test.substring()) //Automationa

//slice()->extract the portion of the string, accepts negative values
// console.log(test.slice()); //Automationa
// console.log(test.slice(1,5))//utom
// console.log(test.slice(5,1))//empty
// console.log(test.slice(-1)) //a
// console.log(test.slice(-11,-1))//Automation
// console.log(test.slice(-1,-11))//empty

//split()

console.log(test.split()) //[ 'Automationa' ]
console.log(test.split("")) //[  'A', 'u', 't', 'o','m', 'a', 't', 'i','o', 'n', 'a']
console.log(test.split("a"))//[ 'Autom', 'tion', '' ]

//classroom

//JS to print the string "Testleaf" in reverse order

/* let str="tes"
let rev=""
for(){

} */



















