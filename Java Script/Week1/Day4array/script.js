// non-primitive data type 

// 1-array 
let arr=[true,"apple",100,false,null]
let numarr=[59,78,20,57]
let boolarr=[true,false,true,false]


// console.log(arr)
// console.log(numarr)
// console.log(boolarr)

let fruits=['apple','mango','pineapple']
console.log(fruits)
console.log(fruits[0])
console.log(fruits[10])
fruits[1]='orange'
console.log(fruits)

// Methods 
// Push()
fruits.push("jackfruit","mango","kiwi")
console.log(fruits)


// pop()
fruits.pop()
console.log(fruits)

// lenth 
console.log(fruits.length)
// delete 
delete fruits[3]
console.log( fruits)

// fruits.length=0
// console.log(fruits)

console.log(fruits[-1])








// 2-Object 

// let obj={
//      username:'hanna',
//      email:'hanna@WebGLUniformLocation.com',
//      age:25,
//      city:' areekode',
//      valid:true,

// }

const username={ 
     username:'hanna',
     email:'hanna@WebGLUniformLocation.com',
     age:25,
     city:' areekode',
     valid:true,

}

// console.log(obj)
console.log(username)
 
// two type to access keyname in a object 
console.log(username.username)
console.log(username['username'])