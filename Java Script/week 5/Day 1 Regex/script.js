// 1-literal characters-match exact text

// let pattern=/cat/i;
// let result=pattern.test('That my Cat') 
// console.log(result)

// let pattern=/cat/i; // i is case sensitive flag
// console.log(pattern.test('have a Cat'))

// 2-Metecharecter- are special symbols that carry unique meanings beyond literal characters

// let pattern=/h.t/ //matches any single character
// console.log(pattern.test('hot'))
// console.log(pattern.test('heat'))


// 3-character classes-match a group character

// a- custom set []
// let pattern=/[cr]at/;
//  let pattern=/[a-z]at/ // also add range [a-z][0-9]
// let result=pattern.test('rat or cat')
// console.log(result)

// b-Predefined classes 

// let pattern=/\D/
// console.log(pattern.test('frn'))

// \d- digit -123
// \D-anything except digits -'abc'
// \w - word character -letter,numbers,underscore 'hello_123'
// \W- special character- @ , # , $ ..  -'!'
// \s-white space- space,tab,newline   -  'hi there'
// \S- non-white space - anything except space  - 'hi'


// 4- quantifier-Define how many times a pattern should repeat.

// let pattern=/ab+/  //+ one or more
// console.log(pattern.test('ab'))
// console.log(pattern.test('aaabbb'))
// console.log(pattern.test('bbbbaaa'))



// 5-Anchors - Match position (start/end)
// start - ^ 
// let pattern=/^Hello/
// let result=pattern.test('Hello guys')
// let result=pattern.test('Hi guys')
// console.log(result)

// end - $ 
// let pattern=/world$/
// let result=pattern.test('Hello world')
// let result=pattern.test('Hello guys')
// console.log(result)


