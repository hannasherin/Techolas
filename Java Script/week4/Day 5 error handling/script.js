// Exception handling / Error handling in java script

// Syntax
// try{
//     code that may cause errror
// }catch(error){
//     handle the error
// }


// try{
//     let num= x+10
//     console.log(num)
// }catch(error){
//     console.log('Error :', error.message)
// }



// finally 
// run whether error occurs or not 

// try{ 
//     // let start=x+10
//     // console.log(start)
//     console.log("start")
// }catch(error){
//     // console.log('error', error.message)
//     console.log('error')
// }finally{
//     console.log('end')
// } 



// Custom error 
let age=15
try{
    if(age<18){
        throw new Error('age must be grather than 18')
    }
}catch(err){
    console.log(err.message)
}