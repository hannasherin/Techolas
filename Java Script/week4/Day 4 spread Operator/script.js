// spread operator(...) is a special syntax used to expand elements of an iterable (like an array, string, or object) into individual elements.

// const num=[10,20,30]
// console.log(...num)
// const obj={
//     name : 'Hanna',
//     age :24
// }
// const obj2={...obj}
// console.log(obj2)

// Use case  of spread operator
// 1- Merging Array 
// const number1=[20,50,60]
// const number2=[100,200,400]
// const mergeArray=[...number1,...number2]
// console.log(mergeArray)

// 2-cloning array-copy array 
// const  orginal=[20,40,58]
// const clone=[...orginal]
// console.log(clone)

// 3-passing Array elements as arguments 
// function sum(a , b, c){
// return a + b + c
// }
// const numbers = [10, 20, 30];
// console.log(sum(...numbers));

// 4- combining objects 
// const obj1={a:1, b:2}
// const obj2={c:5,d:8}
// const combine={...obj1,...obj2}
// console.log(combine)

// 5-Add new elment 
// const num=[49,58,20]
// const newarr=[...num,46,643,77,220]
// console.log(newarr)
 
// 6-Add new element with object 
// const object1={
//     add :34,
//     sum :69
// }
// const newobj={...object1 , multi : 39}
// console.log(newobj)

// 7-Updating  existing object
// const user={
//     name : 'Hanna',
//     age :25
// }
// console.log(user)
// const updateuserage={...user, age :20}
// console.log(updateuserage)

// string into array 
const str='hello'
const arr=[...str]
console.log(arr)