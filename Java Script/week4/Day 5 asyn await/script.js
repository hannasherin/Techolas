// function getNumber(){
//     return new Promise((resolve) => {
// setTimeout (()=> resolve(10),2000)
//     })
// }

// async function showNumber(){
//     console.log("getting number..")
//     let result= await getNumber()
//     console.log('result:' , result)
// }

// showNumber()


 async function fetchData(){
    const responce= await fetch('https://jsonplaceholder.typicode.com/users')
    const result =responce.json()
    console.log(result)
 }
fetchData()