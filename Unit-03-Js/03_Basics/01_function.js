// Defination of function
function sayMyname() {
  console.log("R");
  console.log("a");
  console.log("j");
  console.log("u");
}

// sayMyname()

// how to add two number

// function addTwoNumber(number1, number2){

//     console.log(number1 + number2);
// }

// mathods +++++++++++++++++++++++++++++

function addTwoNumber(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumber(5, 9);

// console.log("result: ", result);

// many methods take (paramiter and argument value)

function loginUserMessage(username = "Raju"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Raju"))
// console.log(loginUserMessage("Rajesh"))

// Shopping cart\

// Rest Operator (...num1)

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 300, 400, 3000))

// Object

const user = {
  username: "Raju",
  prices: 200
}

function handleObject(anyobject){
  // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
  return
}

// handleObject(user)

// Direct Object pass

handleObject({
  username: "kaka",
  price: 400
})


// How to array pass in function

const myNewArray = [200, 300, 400, 600]

function returnThirdValue(array){
  return array [2]
}

// console.log(returnThirdValue(myNewArray));
console.log(returnThirdValue([200, 300, 400, 600]));