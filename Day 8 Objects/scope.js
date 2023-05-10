//window scope
a = 'Programming' // is a window scope this found anywhere
b = 5 // this is a window scope variable
function lsScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // Programming 5 ,accessible


//global scope
let c = 'Programming' // is a global scope it will be found anywhere in this file
let d = 5 // is a global scope it will be found anywhere in this file
function lscope() {
  console.log(c, d) // Programming 5, accessible
  if (true) {
    let c = 'Python'
    let d = 100
    console.log(c, d) // Python 100
  }
  console.log(c, d)
}
lsScope()
console.log(c,d) // programming 5, accessible

//Local scope.
let s = 'Programming' // is a global scope it will be found anywhere in this file
let t = 5 // is a global scope it will be found anywhere in this file
function lsScope() {
  console.log(s, t) // Programming 5, accessible
  let c = 40
  if (true) {
    let s = 'Python'
    let t = 20
    let z = 40
    console.log(s, t, z) // Python 20 30
  }

  console.log(s, t) // Programming 5 , accessible
}
lsScope()
console.log(s, t) // Programming 5, accessible

//using let
function calculateArea(){
    const width =5
    console.log(width)
}
if (true){
    const width =5
    console.log(width) //5
}
for(let i = 0; i < 5; i++){
    console.log(i)
} //0 1 2 3 4 