// Defination of function
function sayMyname() {
  console.log("R");
  console.log("a");
  console.log("j");
  console.log("u");
}

// sayMyname()

// how to add to number

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
console.log(loginUserMessage("Rajesh"))
