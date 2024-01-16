// call back function    (forEach ) - "high order array loop"

const coding = ["js", "py", "rb", "jv", "c++"];

// name is not allowed in callback function.

coding.forEach(function (item) {
  // console.log(item);
});

// use in arrow function

coding.forEach(function (val) {
  // console.log(val)
});

coding.forEach(printMe);

// printMe

function printMe(item) {
  // console.log(item);
}

// pass out this function in forEach





// example for use foreach function 

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  // console.log(`Element at index ${index} is ${number}`);
});



// parameter access in forEach function

coding.forEach( (item, index, array) => {
  // console.log(item, index, array)
} )



// array into abject
// [{}, {}, {}]

const myCoding = [
  {
    languagename: 'javaScript',
    languageFileName: 'js'
  },
  {
    languagename: 'python',
    languageFileName: 'py'
  },
  {
    languagename: 'java',
    languageFileName: 'jv'
  },
]

myCoding.forEach( (index) => {
  console.log(index.languagename)
} )


