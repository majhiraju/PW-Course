const myNum = [1, 2, 3]

const numValue = myNum.reduce( function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

// console.log(numValue)


// try to write arrow function

const myTotal = myNum.reduce( (acc, currval) => acc+currval, 0)

// console.log(myTotal)



// shoppingcart ++++++++++++

const shoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "C++ Course",
        price: 1999
    },
    {
        itemName: "mobile Course",
        price: 12999
    },
]

const payToPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(payToPrice);