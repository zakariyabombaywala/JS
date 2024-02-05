// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best num");
  }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`table : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// break and continue

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log("Detected 5");
    break;
  }
  //   console.log(`value of i is ${i}`);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    // console.log("Detected 5");
    continue;
  }
  //   console.log(`value of i is ${i}`);
}

// while and do while loop

let i = 0;
while (i <= 10) {
  //   console.log(`value of index is ${i}`);
  i = i + 2;
}

let myArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let arr = 0;

while (arr < myArr.length) {
  //   console.log(`days : ${myArr[arr]}`);
  arr = arr + 1;
}

let score = 1;

do {
  //   console.log(`score is ${score}`);
  score++;
} while (score <= 10);

// for of loop

const arry = [1, 2, 3, 4, 5];

for (const val of arry) {
  //   console.log(val);
}

const greetings = "Hello World";

for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  //   console.log(`char is ${greet}`);
}

// Maps

const map = new Map();

map.set("IN", "India");
map.set("PK", "Pakistan");
map.set("SA", "South Africa");

console.log(map);

for (const [i, j] of map) {
  //   console.log(i, " :- ", j);
}

// for in

const myObj = {
  js: "javascript",
  py: "python",
  cpp: "c++",
};

for (const key in myObj) {
  //   console.log(`${key} shortcut for ${myObj[key]}`);
}

const myarray = ["mon", "tue", "wed", "thu"];

for (const key in myarray) {
  console.log(myarray[key]);
}

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
