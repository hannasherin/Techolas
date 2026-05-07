
// function expression used in anonymous function 
// const result=function(){
//     console.log('hello worlsd')
// }

// result()

// const result=function(mark){
//     if(mark>=40){
//         console.log('pass')
//     }else{
//         console.log('fail')
//     }
// }
// result(79)

 
// Arrow function 

// let hello=()=>'Hello Function'
// console.log(hello())

// let myfunction=(a,b)=>a+b
// console.log(myfunction(10,20))

// let square=(a)=>{
//     return a*a
// }
// console.log(square(4))
// Arrow function with (parameter)
// let greet=(name)=>'Hello'+ name
// console.log(greet(' Hanna'))


// IIFE function -create i top in page otherwise it will be error
// (function(){
//     console.log('hii');
// })()
// other way 
// (()=>console.log('hii'))() 


// Callback Function -important 

// function greet(name,callback){
//            console.log('hello'+name)
//            callback()
// }

// function saybye(){
//     console.log('good Bye')
// }

// greet(' hanna',saybye)


// function greet(callback){
//     console.log('Hello !')
//     callback()
// }
// greet(function(){
//     console.log('This is a callback function')
// })


// example of callback 
// function greet(callback){
//     console.log(callback()) 
// }
// greet(()=>'say bye')
// another way 
// greet(()=>{
//     return 'say bye'
// })
// another way
// greet(()=>(
//     'Say Bye'
// ))


// settimeout -runs one after delay
// cleartimeout 

// console.log('first')
// setTimeout(function(){
//    console.log("second")
// },2000)
// console.log('third')


// setInteval -repeated execution
// setInterval(function(){
//     console.log('hello')
// },2000)

// let count=0
// let result=  setInterval(()=>{
//     count++
//     console.log(count)

//     if(count===5){
//         clearInterval(result)
//         console.log('stop')
//     }
// },1000)


