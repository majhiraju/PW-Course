// forEach Loop 

const coding = ["js", "rb", "java", "py"]

// coding.forEach ( function (item) {
//     console.log(item)
// } )



// coding.forEach ( (val) => {
//     console.log(val)
// } )



// loop in function ++++++++++++++


// function printMe (value){
//     console.log(value);
// }
// coding.forEach(printMe)


// parameter+++++++++++

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array)
// } )


// example of  Object in  array ++++++++++

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach ( (item) => {
    console.log(item.languageName)
} )