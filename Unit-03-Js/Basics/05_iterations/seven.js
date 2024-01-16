// using map method 

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumber.map( (num) => num + 10)

// console.log(newNums);



// using foreach in map method

const number = []

myNumber.map( (num) => {
    if (num > 3) {
        number.push(num + 10)
    }
} )


// console.log(number);



// Channing method +++++++++++++++++

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = values
.map( (num) => num * 10 )
.map( (num) => num - 1)
.filter( (num) => num >= 39 )

// console.log(result)

