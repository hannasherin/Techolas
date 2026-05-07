// for..of loop 

// Activity 1 
// sum of an array 
console.log('Sum of array')
let arr=[10,20,30, 40]
let sum=0
for(let num of arr){
    sum += num
}
console.log('sum = ',sum)

// Activity 2
// Largest number 
console.log('Largest')
let number=[10,30,40,9]
let largest=number[0]
for(let item of number){
    if(item>largest){
        largest=item
    }
}
console.log("largest is",largest)