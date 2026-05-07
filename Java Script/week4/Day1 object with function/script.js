// function inside a object is usually called a method 

// 1) Basic Method (function as property )
// const user = {
//     name : 'joys' ,
//     city : 'calicut',
//     greet : function (){
//         console.log('Hello World')
//     }
// }
// user.greet()
// console.log(Object.keys(user))

// 2) shorthand method (Modern ES6 way)
// const user = {
//     name : 'hanna' ,
//     city : 'calicut',
//     greet(){
//         console.log('Hello World')
//     }
// }

// user.greet()

// 3) Arrow Function 

// const user={
//     name :'hanna',
//     greet : ()=>{
//         console.log('hello')
//     }
// }
// user.greet()

// 4)function defined outside and assigned 
function greet(){
    console.log('hello,outside function')
}
const user={
    name :'hANNA',
    fun:greet
}
user.fun()