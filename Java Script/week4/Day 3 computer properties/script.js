// A computed property in JavaScript means using a dynamic key (property name) inside an object using square brackets [].

const key='name'
const  address='city'
const user={
    [key]:'Hanna',
    [address]:'Malappuram'
}
console.log(user)
console.log(user.name)
console.log(user.city)
