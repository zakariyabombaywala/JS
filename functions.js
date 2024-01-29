function myName() {
  console.log("Z");
  console.log("A");
  console.log("K");
  console.log("A");
  console.log("R");
  console.log("I");
  console.log("Y");
  console.log("A");
}

// myName();
// myName; // this not execute the function this only reference

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(2, 5);
function addTwoNumbers(number1, number2) {
  //   let result = number1 * number2;
  //   return result;
  return number1 + number2;
}

const result = addTwoNumbers(2, 5);
// console.log("Result : ", result);

function loginUserMessage(username) {
  return `${username} just logged in `;
}

// console.log(loginUserMessage("Zakariya"));

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(20, 60, 50, 500));

const user = {
  username: "zakariya",
  price: 500,
};

function handleObject(anyObj) {
  //   console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user);

handleObject({
  usernam: "sam",
  price: 200,
});

const newArray = [100, 500, 400, 200];

function returnArrayValue(getVal) {
  return getVal[2];
}

// console.log(returnArrayValue(newArray));
// console.log(returnArrayValue([200, 400, 500, 700]));

function one() {
  const username = "Zakariya";

  function two() {
    const website = "amazon";
    // console.log(username);
  }
  //   console.log(website);

  two();
}
one();
