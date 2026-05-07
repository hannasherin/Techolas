let fruits=['apple','banana','mango']
// console.log(fruits.length)
// console.log(typeof fruits)
// console.log(fruits.toString())
// console.log(typeof fruits.toString())
// console.log(fruits.at(1))
// console.log(fruits.at(-1))
// console.log(fruits.join('-'))
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.push('kiwi','pineapple'))
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)
// console.log(fruits.unshift('jack fruit'))
// console.log(fruits)

// delete operator
// delete fruits[1]
// console.log(fruits)
// console.log(fruits[1])


// // Concat let arr=['a','b']
// arr[50]='c'
// console.log(arr)

// let veg=['tomoto','pototo']
// let result =fruits.concat(veg)
// console.log(result)

// Nested Array -turn multi-dimentional array into one arry -flat()
// let arr=[1,[2,[3,4]]]
// console.log(arr.flat())
// console.log(arr.flat(2))

// Slice(startIndex.endindex-1(Length))
// let arr=['a','b','c','d']
// console.log(arr.slice(1,3))
// console.log(arr) //unchanged in orgin

// Splice()-Adds or removes elements from a specific position (changes original array).
// remove items 
// let arr=['a','b','c','d']
// arr.splice(1,2)
// console.log(arr)
// add items 
// arr.splice(1,2,'x','y')
// console.log(arr)
 
// sort()
let arr=[100,87,57]
console.log(arr.sort())
console.log(arr.sort((a,b)=>b-a))
console.log(arr.sort((a,b)=>a-b))
// let str=['f','a','v','b']
// console.log(str.sort())

// const arr=['cat','apple','mango']
// let res=arr.filter((str)=>{
//     return str.length > 3
// })

// console.log(res)

// const array=['cat','apple','mango']
// let arr=array.filter((str)=>{
//     return str.length 
// })

// console.log(arr)