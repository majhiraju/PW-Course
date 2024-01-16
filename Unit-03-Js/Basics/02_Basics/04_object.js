//  const tinderUser = new Object()  // It is singlreton Object
const tinderUser = {}; // non singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Saswat";
tinderUser.isLoggedIn = false;

//  console.log(tinderUser);

const regularUser = {
  email: "saswat123@gmail.com",
  fullname: {
    userfullname: {
      firstName: "Saswat",
      lastName: "Manjhi",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }; // sprade method most Importent
// console.log(obj3);

// using syntax comming for database value
// syntax
// Array of Object
const user = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
];
user[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructure

const course = {
  coursename: "Code and Practice",
  price: "999",
  courseInstructor: "saswat",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(instructor);

// API concept
// {
//     "name": "raju",
//     "coursename": "code and practice",
//     "price": "free"
// }


[
    {}, 
    {}, 
    {}
];
