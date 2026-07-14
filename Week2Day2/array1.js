//Default sort()-converts the numbers into string and then compares using ascii value/unicode

// let arr1=[2,9,6,4,3]
// console.log(arr1.sort());//[ 2, 3, 4, 6, 9 ]

// let arr2=[2,100,20]
// console.log(arr2.sort())//[ 100, 2, 20 ]

// let arr3=[true, "welcome",45] //ascii value for t=116, w-119,4=52
// console.log(arr3.sort());//[ 45, true, 'welcome' ]


//ascending/descending using arrow function
// console.log(arr1.sort((a,b)=>a-b)); //ascending order-[ 2, 3, 4, 6, 9 ]
// console.log(arr1.sort((a,b)=>b-a)); //descending order-[ 9, 6, 4, 3, 2 ]

//reverse()->reverse the array
let value1=[3,9,7,4]
let value2=[14,20,11,79]
console.log(value1.reverse())//[ 4, 7, 9, 3 ]

//join()-> converts array to string
console.log(value1.join("-"))//4-7-9-3

//spread operator (joins 2 arrays)
let result=[...value1,...value2]
console.log(result);//[4,  7,  9, 3, 14, 20, 11, 79]

//includes=> to check the element is present in the array.
console.log(result.includes(79)) //true

//for loop-> iterates through the index
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

//for_of-> loops through the value
for(let lp of result){
    console.log(lp);
    
}

/* o/p

4
7
9
3
14
20
11
79

*/







