
// map()
const numbers=[2,3,4,78]
// const result=numbers.map((num)=>num+2)
// console.log(result)

// const result=numbers.map((num)=> num>4)
// console.log(result)

// foreach() - like for loop
// const arr = numbers.forEach((i)=>
//     console.log(i)
//     // console.log(i.index)
// )

//find()-find the given item and first item will execute if statement will be comes true
// const arr=numbers.find((num)=>{
//     return num === 78;
// })
// console.log(arr)

//filter()-all items will be executes if the statemet will true
// const arr=numbers.filter((num)=>{
//     return num>=3
// })
// console.log(arr)

// Reduce -its return single value
let array=[1,2,3,4,5]
// const sum=array.reduce(( acc, curr)=>{
//           return acc + curr
// },0) //0 is the initial value
// console.log(sum)

// some - 
// let result=numbers.some((item)=> item>3)
// console.log(result)

//every - true is execute if all condition in item will be true ,if one is get false the output will be false.
let result=numbers.every((item)=>item>0) 
console.log(result)

// const arr=['cat','apple','fish']
// let res=arr.map((str)=>{
//     return str.length >3
// })
// console.log(res)

