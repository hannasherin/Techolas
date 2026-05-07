// get methods 
let now=new Date()
console.log(now)

console.log(now.getFullYear()) //2026 get current year

console.log(now.getMonth()+1) // 5 current month
console.log(now.getMonth()) //4 (its may bcz jan=0 start)
 
console.log(now.getDate()) //6 current date

console.log(now.getDay()) //3 (wed) current day mon-1 ,tue-2

console.log(now.getHours()) //18 current hour

console.log(now.getMinutes())  //39m current minutes

console.log(now.getSeconds()) // 51s current seconds

console.log(now.getMilliseconds()) // 580ms current milliseconds


// set method 

let date=new Date()

date.setFullYear(2028) // 2028-05-06 set year
console.log(date)

date.setDate(31)
console.log(date) // 2028-05-15

date.setMonth(11) //2028-12-31
console.log(date)

date.setHours(21)
console.log(date) 

date.setMinutes(30)
console.log(date)


// Conversion Method  -human readable format

console.log(now.toDateString()) // wed may 06 2026

console.log(now.toTimeString()) //19:00:15 GMT+0530 (India Standard Time)

console.log(now.toLocaleDateString()) // 6/5/2026 (indian format/Local format)

console.log(now.toLocaleTimeString()) //7:02:02 pm (LOcal format in indian)