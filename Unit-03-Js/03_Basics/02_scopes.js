// var c = 300

let a = 400

if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// +++++++++++++++++++ Nested Scope +++++++++++++++++++++++++++

 function first(){
  const username = "raju"
  
  function second(){
    const website = "youtube.com"
    // console.log(username)
  }
  // console.log(website);

  second()

 }

 first()


// if statement

if (true) {
  const username = "raju"
  if (username === "raju") {
    const website = " youtube"
    // console.log(username + website)

  }
  // console.log(website)

}
// console.log(username)



// ++++++++++++++++++++++ Intersting Concept +++++++++++++++++++

// console.log(addone(9))
function addone(num1){
  return num1 + 1
}


console.log(addTwo(9))
const res = function addTwo(num2){
  return num2 + 5
}