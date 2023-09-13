function addTwoNumber(num1, num2){
  return num1 + num2
}

const result = addTwoNumber("raju", " manjhi")
// console.log(result)





function loginUserMessage(username = "ramesh"){
  if (username === "ramesh") {
    console.log("Please enter a username")
    return
  }
  return `${username}, just logged in`
}

const results = loginUserMessage("raju")
console.log(results)


