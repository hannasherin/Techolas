// Activity 1
// Largest and Smallest in an array 
let number=[10,20,30,60]
let smallest=number[0]
let largest=number[0]
for(let i in number){
    if(number[i]<smallest)smallest=number[i];
    if(number[i]>largest)largest=number[i];
}
console.log('smallest',smallest)
console.log('largest',largest)

// Activity 2
// sum of all element in an array 
let arr=[10,20,30,40]
let sum=0
for(let i in arr){
    sum+=arr[i]
}
console.log('sum = ',sum)

// Activity 3
// even number 
let array=[2,5,6,1,8]
for(let i in array){
    if(array[i] % 2 === 0){
        console.log(array[i])
    }
}

// Activity 4
// index of specific element 
let num=[30,50,100]
let target=100
for(let i in num){
    if(num[i]===target){
        console.log(i)
    }
}

// reverse and 
// double each element 
let  numbers=[12,4,6,7]
for(let i in numbers){
    numbers[i]=numbers[i]*2
}
console.log(numbers)