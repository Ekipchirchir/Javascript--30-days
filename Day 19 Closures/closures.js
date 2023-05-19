function outerfunction(){
    let count =5;
    function innerFuction(){
        count ++
        return count
    }
    return innerFuction
}
const innerFunction =outerfunction()
console.log(innerFunction()) //6
console.log(innerFunction()) //7
console.log(innerFunction()) //8

function upperFunction(){
    let start =10;
    function lowerFunction(){
        start ++
        return start
    }
    return lowerFunction
}
const lowerFunc =upperFunction()
console.log(lowerFunc())//11
console.log(lowerFunc())//12
console.log(lowerFunc())//13

function outsideFunction(){
    let sum =0;
    function plusOne(){
        sum++
        return sum
    }
    function minusOne(){
        sum--
        return sum
    }
    return{
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const insideFunction =outsideFunction()
console.log(insideFunction.plusOne) //1
console.log(insideFunction.minusOne)//0

