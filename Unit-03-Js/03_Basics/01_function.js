function sayMyName() {
  console.log("R");
  console.log("a");
  console.log("j");
  console.log("u");
}

// const result = sayMyName()
// console.log(result);



// add two Number

function addTwoNumber(num1, num2) {
  // let result = num1 + num2
  // return result
  return num1 + num2
}
const result = addTwoNumber(7, 8);
// console.log("Result: ", result);


// different method take to parameter

function loggedInMessage(username){
  if (username === undefined) {
    console.log("Please enter a username");
    // return
  }
  return (`${username}, just logged in`)
}
const res = loggedInMessage("raju")
// console.log(res)


// Shopping Cart

// Rest Parameter (... rest Operator) and set the parameter of customer

function addPrice(...num){
  return num
}
const results = addPrice(11, 33, 34, 55, 77)
// console.log(results)



// How to Object pass in function

// Object 1
const user = {
  book: "Bharat",
  price: 499
}

// Object 2
const users = {
  book: "Prime minister of Bharat",
  price: 3999
}

function bookPrice(anyobject){
  // console.log(`The book name is ${anyobject.book}, and price is Rs. ${anyobject.price} /-.`)
}
// bookPrice(users)

// Direct object pass
bookPrice({
  book: "kaku",
  price: 499
})


// Array pass in function

const myarr = [30, 50, 60, 10, 80, 90]

function returnFifthvalue(anyarray){
  return anyarray[4]
}
// console.log(returnFifthvalue(myarr))

// Direct method
// console.log(returnFifthvalue([10, 20, 50, 39, 44]))
