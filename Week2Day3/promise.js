
let marks=80

let studentRecord=new Promise((success, failure)=>{

    if(marks>35){
        success("Passed")
    }else{
        failure("Failed")
    }

})

//console.log(studentRecord);

studentRecord
.then(result=>(console.log(result)))
.catch(error=>(console.log(error)))