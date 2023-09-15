// This keywoerd

const user = {
  username: "raju",
  price: 200,

  // method welcome message

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "ram"
// user.price = 3090
// user.welcomeMessage();

// console.log(this);


// comming to a function using this keyword

// function chai(){
//     let username = "raju"
//     console.log(this.username);

// }

// chai()




// Declearation function from arrow function

// const chai = function () {
//     let username = "raju"
//     console.log(this.username);
// }


const chai = () => {
    let username = "raju"
    console.log(this);
}

// chai()


// Arrow function

// syntax of arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3, 4))



// using another method of arrow function (emplisite return)

// const addTwovalue = (num1, num2) => num1 + num2


// const addTwovalue = (num1, num2) => (num1 + num2)


// object return

const addTwovalue = (num1, num2) => ({username: "raju"})

console.log(addTwovalue(3, 4))