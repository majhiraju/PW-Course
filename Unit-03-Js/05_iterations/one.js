// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 12; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`)
        
    }
    
    
}


// Multiplication ++++++++++++++++++++++++

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 12; j++) {
        // console.log(i + '*' + j + ' = ' + i*j)
    }
      
}



// Array in loop +++++++++++++++++++++++++

let myArr = [1, 2, 4, 3, 5, 7, 8, 6]

// console.log(myArr.length)

for (let i = 1; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
    
}


// keyword ++++++++++++ Break and Continue +++++++++++++++++

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        // break
        continue
    }
    console.log(`value of i is ${i}`)
    
}
