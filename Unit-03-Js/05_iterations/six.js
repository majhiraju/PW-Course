// foreach function not return any value

// const coding = ["js", "py", "rb", "jv", "c++"];

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// } )

// console.log(values);



// Each value for using filter method +++++++++

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = newNums.filter( (index) => index > 5 )

// console.log(result);



// same work for using foreach function

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nums = []

myNums.forEach( (item) => {
    if (item > 6) {
        nums.push(item)
    }
} )

// console.log(nums)


