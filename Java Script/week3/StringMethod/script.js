let text=' Hello Hanna'

// typeof -string
// console.log(typeof text) //string

// console.log(text.toUpperCase())
// console.log(text.length)
// console.log(text.toLowerCase())
// console.log(text.trim()) //remove the whitespace from both ends.

// includes() - check if a string contain a given substring . retuen true or false value
// console.log(text.includes('Hello')) // true
// console.log(text.includes('hello')) //false bcz its Case sensitive

// .startsWith() -check whether a string start with given substring
// console.log(text.startsWith(' Hello')) // true 
// console.log(text.startsWith('Hello')) // false

// .endsWith()- check whether a string ends with given string 
// console.log(text.endsWith('Hanna')) //true
// console.log(text.endsWith('sweety')) //false

// .indexOf() -find the position  of the first occurance of  asubstring 
// console.log(text.indexOf('H')) //1 (0 is occuppy in empty)
// console.log(text.indexOf('Hanna'))

// .lastIndexOf()-find the position of the last occurance of substring 
// console.log(text.lastIndexOf('Hanna'))
// console.log(text.lastIndexOf('lo'))
// console.log(text.lastIndexOf('hello'))

// .slice()-extract a portion of a string and return a string(str.slice(start, end))-slice() accepts negative indexes (counts from the end).
// let str='Javascript'
// console.log(str.slice(0,4)) //Java

// .substring()-extract a portion of a string between two indexs and return new string.substring() does not accept negative indexes.
// console.log(str.substring(0,4))

// replace()-only replaces the first match
// let string='Hanna is learning js.js is fun'
// let result= string.replace('js','Javascript')
// console.log(result)
// .replaceAll()- replace all occurrences of a substring
// console.log(string.replaceAll('js','Javascript'))

// .split()-divide a string into  an array
// let text='apple,banana,orange'
// console.log(text.split(',')) // ['apple','banana','orange']
// console.log(text.split("")) //['a', 'p', 'p', 'l', 'e',',', 'b', 'a', 'n', 'a','n', 'a', ',', 'o', 'r','a', 'n', 'g', 'e']
// console.log(text.split(" ")) // [ 'apple,banana,orange' ]

// .charAt()-return character at a specified index of the string 
// console.log(text.charAt(1)) //p

// repeat()-create new string by repeating the orginal string specified number of times 
// let str='Hi '
// console.log(str.repeat(3))





