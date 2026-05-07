// Arithemetic Operator
let a=5
let b=10
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(b % a)
// console.log(a ** b)


// post increment 
console.log(a++)
console.log(a)

// pre increment
console.log(++a)
console.log(a)

// post decrement 
console.log(a--)
console.log(a)

// pre increment 
console.log(--a)
console.log(a)

//  primitive 
let strn="hello"
strn[0]="w"

console.log(strn)
// its not change the value 

//Assignment Operator

let x=10
let p=x
console.log(p)

// += assign 
x+=10   //x=x+10
console.log(x)


// -= assign 
x-=5
console.log(x)
 
// *= assign 
x*=2
console.log(x)

// **= assign 
x**=2
console.log(x)

// /= assign 
x/=2
console.log(x)
 
// %= assign 
x%=5
console.log(x)
 
console.log("4"+2)
console.log(true + true)
console.log(true+ false)


// typeof() find the datatype 
let str='hanna'
console.log(typeof(str))

let is_valid=true
console.log(typeof(is_valid))

// data type object
let array=[1,2,3,4,5]
 console.log(typeof(array)) 

let object={
    name:'hanna',
    age:24,
    city:'areeekoe'
}
console.log(typeof(object))

let counts;

console.log(typeof(counts))

let roll=null

console.log(typeof(roll))


// comparison operator

console.log(5==5)

console.log("5"==5)
console.log('5'===5)
console.log('5'!=5)
console.log("5"!==5)
console.log(5!==5)
console.log(5>6)
console.log(5<6)
console.log(10>=5)
console.log(10<=15)


// Logical Operator 
console.log(10==10 && 5>=3)
console.log(10<=5 && 3==3)

console.log(10==10||3>8)
console.log(3>45 || 10<6)

console.log(!5==5)
console.log(!(5>45))