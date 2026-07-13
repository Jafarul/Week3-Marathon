//array= collection of heterogeneous datatypes

let arr=["sai","vinoth","Sanjeev"]

//index-> starts from 0
//length-> is a property and starts from 1

//print all array values

console.log(arr); //[ 'sai', 'vinoth', 'Sanjeev' ]
console.log(arr[0]) //sai

arr[3]=134
console.log(arr); [ 'sai', 'vinoth', 'Sanjeev', 134 ]

//length->4
console.log(arr.length) //4

//push()-> adds 1 or more element at the end of the array
console.log(arr.push(undefined,true));
console.log(arr); // [ 'sai', 'vinoth', 'Sanjeev', 134, undefined, true ]

//pop()-> remove only 1 element at the end of the array
console.log(arr.pop()); //true
console.log(arr); // [ 'sai', 'vinoth', 'Sanjeev', 134, undefined ]

//unshift()-> adds 1 or more element at the start of array
console.log(arr.unshift("apple",678));//index-7
console.log(arr);//['apple',   678, 'sai', 'vinoth','Sanjeev',134,undefined]

//shift()-> removes 1 element at the start of the array
console.log(arr.shift())//apple
console.log(arr) //[ 678, 'sai', 'vinoth', 'Sanjeev', 134, undefined ]

//slice()-> extracts the portion of the array, it will not alter the original array
console.log(arr.slice(1,4)); //[ 'sai', 'vinoth', 'Sanjeev' ]
console.log(arr); //[ 678, 'sai', 'vinoth', 'Sanjeev', 134, undefined ]

//splice()-> add and remove elements in between the array and it will modify the original array
console.log(arr.splice(1,3,"data","Zero"))//[ 'sai', 'vinoth', 'Sanjeev' ]
console.log(arr); //[ 678, 'data', 'Zero', 134, undefined ]












