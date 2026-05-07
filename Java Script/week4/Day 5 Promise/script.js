//promise

// let  mypromise= new  Promise((resolve , reject)=>{
//     let success=true
//     if(success){
//         resolve('task completed')
//     }else{
//         reject('Task Faild')
//     }
// })

// mypromise
// .then((result) => console.log(result))
// .catch((err)=>console.log(err))


// promise chaining

// let mypromise = new Promise((resolve, reject) => {
//     resolve(5)

// })
// mypromise
//     .then((num) => {
//         console.log(num)
//         return num * 2
//     })

//     .then((num) => {


//         console.log(num)
//         return num + 3
//     })
//     .then((num) => {


//         console.log(num)
//     })
//     .catch((err) => console.log(err.message)
//     )

// promise methods 

// 1. promise.all()


// const p1 =  Promise.resolve(10);
// const p2 =  Promise.reject(20);
// const p3 =  Promise.resolve(30);
// Promise.all([p1, p2, p3])
//     .then((result) => {
//         console.log('Promise Result :', result);

//     })
//     .catch((err) => {
//         console.log('Error', err);

//     })

// 2. promise.race()


// let fast = new Promise(resolve => setTimeout(() => resolve("Fast"),
// 1000));
// let slow = new Promise(resolve => setTimeout(() => resolve("Slow"),
// 500));
// Promise.race([fast, slow])
// .then(result => console.log(result));


// 3. promise.any()


// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.any([p1, p2, p3])
//     .then(result => console.log(result))
//     .catch(err => console.log(err))



fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) => responce.json())
.then((result)=> console.log(result))



