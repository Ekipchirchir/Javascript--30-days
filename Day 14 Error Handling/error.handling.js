try{
    let firstName='Emmanuel'
    let fullName =firstName + ' ' +lastName
}catch(err){
    console.log(err)
} //ReferenceError: lastName is not defined

try{
    let firstIngredient ='Tomatoes'
    let allIngredients =firstIngredient + secondIngredient
} catch(err){
    console.log(err) //secondIngredient is not defined
} finally{
    console.log('The food will still get cooked and will be tasty!') //The food will still get cooked and will be tasty!
}

//The code block takes a parameter and therefore it has the name and message keys
try{
    let firstItem='Soap'
    let bathing =firstItem + secondItem
}catch(err){
    console.log('Name of error',err.name)
    console.log('Message of error', err.message)
}finally{
    console.log('The code will still be executed regardless')
}
/*Name of error ReferenceError
Message of error secondItem is not defined
The code will still be executed regardless*/


const throwError =()=>{
    let text
    let y =prompt('Enter a number:')
    try{
        if(y ===" ")throw 'Enter a number'
        if (isNaN(y)) throw 'Not a number'
        y =Number(y)
        if(y<5) throw 'Too low'
        if(y>15)throw 'Too high'
    }catch (err){
        console.log(err)
    }
}
throwError

//Error types.
//1. ReferenceError
let firstWorker ='Jack'
let team =firstWorker+secondWorker
console.log(team) //ReferenceError: secondWorker is not defined*/

//2.SyntaxError
let area=40*50
console.log(area)
console.log('This is the area")
//SyntaxError: Invalid or unexpected token 

//3.TypeError
let value=15
console.log(value.toLowerCase()) //TypeError: y.toLowerCase is not a function