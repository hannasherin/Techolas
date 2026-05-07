const person={
    name:'Hanna',
    age : 25,
    course : 'MERN'
}


// Object.keys(obj-name)-it represent keys on the object  
// console.log(Object.keys(person)) //[ 'name', 'age', 'course' ]

// Object.values(obj-name)-represent of values in object 
// console.log(Object.values(person)) //[ 'Hanna', 25, 'MERN' ]

// Object.entries(obj-name)-return an array of key value
// console.log(Object.entries(person))

// Object.freeze(obj-name)-Makes object immutable (no changes allowed)
// Object.freeze(person)
// person.age=24;
// console.log(person.age)

// Object.seal(obj-name)-Prevents adding/removing properties but allows modification
// Object.seal(person)
// person.age=24
// person.education='ug'
// console.log(person)

// Object.fromEntries(obj-name) -Converts key-value pairs into an object
// const num=[['x' , 10],['y' , 20]]
// const obj=Object.fromEntries(num)
// console.log(obj)

// Object.hasOwn(obj-name ,'key-name')-Checks if a property exists directly on the object . return true or false
// console.log(Object.hasOwn(person, 'age'))
// console.log(Object.hasOwn(person, 'education'))

