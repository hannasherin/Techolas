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
    console.log(responce)
    if(!responce.ok) throw new Error('server error')
    const result =responce.json()
    console.log(result)
 }
fetchData()
