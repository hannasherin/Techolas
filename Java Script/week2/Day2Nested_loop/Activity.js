// Activity 1 
// star 
for( let i=1;i<=5;i++){
    let line=''
    for(let j=1;j<=i;j++){
        line+='* '
    }
    console.log(line)
}

console.log('side star')
for( let i=1;i<=5;i++){
    let line=''
    for(let j=1;j<=i;j++){
        line+='* '
    }
    console.log(line)
}
for(let i=4;i>=1;i--){
    let line=""
    for(let j=1;j<=i;j++){
        line +='* '
    }
    console.log(line)
}

// Activity 2
// 1 2 3
// 1 2 3 
// 1 2 3

for(i=1;i<=3;i++){
    let line=''
    for(j=1;j<=3;j++){
        line += j +' '
    }
    console.log(line)
}