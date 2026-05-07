// Array Destructuring 
// without destructuring
// const array=[10,20,30];
// let first =array[0]
// let second=array[1]
// let third=array[2]
// console.log(first,second,third)

// with destructuring 
// const number=[10,20,30]
// const[first,second,third]=number
// const[first, ,third]=number //skip
// const[first,second,third ,fouth=0]=number //default
// console.log(first)
// console.log(second)


// object  -important name age 
// const person={
//     name:'Hanna',
//     age:24
// }
// const {name,age}=person;
// console.log(name,age)

// Nested Object 
// const employee={
//     name:'hann',
//     address:{
//         city:'Malappuram',
//         pin:673639
//     }
// };

// const{name,address:{city,pin}}=employee;
// console.log(name)
// console.log(city)


// Destructuring  in function parameter 

// without destructuring
// const person={name:'Hanna',age:24,city:'Malappuram'}

// function display(p){
//     console.log(p)
//     console.log(p.name)
//     console.log(p.city)
// }
// display(person)

// with destructuring -pin is create default
const person={
    name:'Hanna',
    age:24,
    city:'Malappuram'}

function display({name,age,city,pin =1233}){
    console.log(name)
    console.log(age)
    console.log(city)
    console.log(pin)
}
display(person)

