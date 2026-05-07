
// if condition 
if (true) {
    console.log('true')
}


// if else condition 
let is_valid = true
if (false) {
    console.log(' true value')
}
else {
    console.log('false value')
}


let age = 20
if (age >= 18) {
    console.log('you can vote')
}
else {
    console.log("you can't vote")
}

let number = -4
if (number >= 0) {
    console.log(' postive')
} else {
    console.log('Negative')
}

// Ternary Operator-shorthand of if else

 let ages=18
 ages>18?console.log('You can vote'):onsole.log("you can't vote")

 let admn=19
 let result=(admn>=18)?'adult':'minor'

// else if condition 

let mark = 75
if (mark >= 90) {
    console.log("A Grade")
}
else if (mark >= 75) {
    console.log('B Grade')
} else {
    console.log(' C Grade')
}

let mrk = 50
if (mrk >= 90) {
    console.log('A grade')
} else if (mrk >= 75) {
    console.log('B grade')
} else if (mrk >= 50) {
    console.log('C grade')
} else {
    console.log('Fail')
}




// SWitch condition 

let day = 3
switch (day) {
    case 1:
        console.log("start a week");
        break;
    case 2:
        console.log("weekend is near")

    case 3:
        console.log('Its holiday')
        break;
    default:
        console.log("its snormal day")
}

let color = 'yellow'
switch (color) {
    case 'red':
        console.log("Stop")
        break;
    case 'yellow':
        console.log('Get Ready')
        break;
    case 'green':
        console.log('Go')
        break;
    default:
        console.log('invalid color')
}

let marks = 50
switch (true) {
    case (marks >= 90):
        console.log('A grade');
        break;

    case (marks >= 75):


        console.log('B grade');
        break;

    case (marks >= 50):
        console.log('c  grade');
        break;
    default:
        console.log('fail')

}