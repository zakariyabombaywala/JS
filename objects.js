// Object.create;

// object literals

const symb = Symbol("key");

const JsUsers = {
  name: "Zakariya",
  "Full name": "Zakariya Bombaywala",
  education: "BE Computer Engineer",
  age: 24,
  nationality: "Indian",
  email: "zakariyabombaywala@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Saturday", "Sunday"],
  [symb]: "mysymbol", // declare symbol in []
};

// console.log(JsUsers.email);
// console.log(JsUsers["email"]);
// console.log(JsUsers["Full name"]);
// console.log(JsUsers[symb]);

JsUsers.email = "zak@gpt.com";
// Object.freeze(JsUsers); // for lock the object after use this can't change the value in object
// JsUsers.email = "zak@microsoft.com";
// console.log(JsUsers);

JsUsers.greeting = function () {
  console.log(`Hello JS User, ${this.name}`);
};

// console.log(JsUsers.greeting());

// Singleton

// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Jhon";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@user.com",
  fullname: {
    userfullname: {
      firstname: "Zakariya",
      lastname: "Bombaywala",
    },
  },
};
// const regularUser1 = {
//   address: {
//     fulladdress: {
//       addressline1: "Surat",
//       addressline2: "Gujarat",
//     },
//   },
// };

// const finalUser = { ...regularUser, ...regularUser1 };
// console.log(finalUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { ...obj1, ...obj2 };
const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);

const user = [
  {
    id: 1,
    email: "z@gmail.com",
  },
  {
    id: 1,
    email: "z@gmail.com",
  },
  {
    id: 1,
    email: "z@gmail.com",
  },
  {
    id: 1,
    email: "z@gmail.com",
  },
  {
    id: 1,
    email: "z@gmail.com",
  },
  {
    id: 1,
    email: "z@gmail.com",
  },
];

// console.log(user[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged")); // check the value is existing or not

// -------- destructure object ----------

const course = {
  coursename: "JS Expert",
  price: "999",
  courseInstructor: "Jhon",
};

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);
