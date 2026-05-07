// useCallback()
// q1
// function double(num,callback){
//      let result=num*2
//      callback(result)
// }
// double(5,function(value){
//     console.log('double value',value)
// })

// q2
function task(callback){
    callback()
}
task(function(){
    console.log("Task done")
})