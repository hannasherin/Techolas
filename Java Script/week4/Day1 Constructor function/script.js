 //A constructor function in JavaScript is a special type of function used to create and initialize objects. It acts like a blueprint for building multiple objects with similar properties and methods.

// new and this 

// function car(make , model){
//     this.make=make
//     this.model=model
// }
// const car1=new car('toyota','corolla')
// console.log(car1)
// const car2=new car('ford','mustang')
// console.log(car2)

function user(name , age){
    this.name=name
    this.age=age
}
const user1=new user('hanna' , 20)
console.log(user1)
const user2=new user('Rahana' , 16)
console.log(user2)