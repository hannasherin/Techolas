// The Rest Parameter (...) allows a function to collect all remaining arguments into a single array.

// function myfn(a,...args){
//     console.log(args)
//     console.log(a)
// }
// myfn(1,2,3,5)

// sum all number
// function sumall(...numbers){
//    return  numbers.reduce((acc,curr)=> {
//        return  acc+curr},0)
// }
// console.log(sumall(20,30,40))


// function sum(...num){
//   let sums=0
//   for (let i=0 ; i<num.length;i++){
//     sums=sums + num[i]

    
//   }
//      return sums   
// }

// console.log(sum(10,20,30))

// filitering properties in objects
// const {a,...rest}={a:1,b:2,c:3}
// console.log(a)
// console.log(rest)

// Destrucuring With Rest 
// const [first,...rest]=[1,2,3,4]
// console.log(first)
// console.log(rest)
