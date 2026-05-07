// Activity 1 
// even number from 2 to 20 
console.log(' even number from 2 to 20 ')

for (let i = 2; i <= 20; i += 2) {
    console.log(i)
}

// Activity 2
// multiplication of 5 
console.log("Multiplication of 5")
for (let n=1;n<=10;n++) {
    console.log("5 X " + n +'=' ,(5 * n));
}

// Activity 3
// Sum of first 10 natural numbers 
console.log('Sum of first 10 numbers')
let sum=0
for(let i=1;i<=100;i++){
    sum+=i
}
console.log('Sum =',sum)

// Activity 4
// print numbers in reverse order 
console.log('numbers in reverse order')
for(let i=10;i>=1;i--){
    console.log(i)
}

// Activity 5 
// Even number between 1 and 20 
console.log('Even Number')
for(let i=1 ; i<=20 ; i++){
       if(i % 2 === 0){
        console.log(i)
       }
}

// Activity 6
// Odd number 1 to 15 
console.log('Odd numbers ')
for(let i=1 ;i<=15 ; i++){
    if(i % 2 !== 0){
          console.log(i)
    }
}


