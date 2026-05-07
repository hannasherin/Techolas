

// Activity 1 
let num = -4
if (num > 0) {
    console.log('Positive')
} else if (num < 0) {
    console.log('Negative')
}
else {
    console.log('Zero')
}

// Activity 2

let number = 7
if (number % 2 == 0) {
    console.log('Even')
} else {
    console.log("Odd")
}

// Activity 3
age = 69
if (age < 13) {
    console.log('Child')
} else if (age < 19) {
    console.log('Teenager')
} else if (age <= 59) {
    console.log('Adult')
} else {
    console.log('Senior')
}

// Activity 4

let score = 85
switch (true) {
    case (score >= 90):
        console.log('Grade A');
        break;
    case (score >= 80):
        console.log('Grade B')
        break;
    case (score >= 70):
        console.log('Grade C');
        break;
    case (score >= 60):
        console.log('Grade D');
        break;
    default:
        console.log('Fail')
}

// Activity 5

let username = 'admin'
let password = '1234'

if (password !=='1234') {
    console.log('INvalid password')
} else if (username !== 'admin') {
    console.log('Invalid Username')
} else {
    console.log('Login successful')
}


// Activity 6

let a=10
let b=25
let c=15
if (a<b && a<c){
    console.log(a + ' is smallest');
}else if(b<a && b<c){
    console.log(b + ' is smallest');
}else{
    console.log(c + ' is smallest');
}