//Changing a value of an index in an array
let nums = [10,13,16,17]
nums[0] =50
console.log(nums) //[ 50, 13, 16, 17 ]

let nums = [10,13,16,17]
let numbers =[10,13,16,17]
console.log(nums==numbers) //false

let studentOne ={
    firstName:'Emmanuel',
    home:'Somali',
    course:'Informatics'

}
let studentTwo ={
    firstName:'Emmanuel',
    home:'Somali',
    course:'Informatics'
}
console.log(studentOne==studentTwo) //false. We do not compare non-primitive datatypes.


let personOne ={
    firstName:'Emmanuel',
    home:'Somali',
    course:'Informatics'

}
let personTwo=personOne
console.log(personOne==personTwo) //True.Two objects are only strictly equal if they refer to the same underlying object.
