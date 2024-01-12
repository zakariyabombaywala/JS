// array

const myArr = [5, 7, 9, 1, 8, 3];
const myArr2 = new Array(2, 1, 3, 5, 7, 8);

// console.log(myArr[5]);

// Array methods

// myArr.push(4);
// myArr.push(2);
// myArr.pop();

// myArr.unshift(2);
// myArr.shift();

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(7));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

//------------------------ Slice, Splice -----------------------------

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // slice give a copy of array not manipulating the original array

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // splice manipulate original array
// console.log(myn2);
// console.log("C", myArr);

const days = ["mon", "tue", "wed", "thu", "fri"];
const weekend = ["sat", "sun"];

// days.push(weekend);
// console.log(days);

// const allDays = days.concat(weekend);
// console.log(allDays);

const allNewDays = [...days, ...weekend];
// console.log(allNewDays);

const anotherDays = [1, 2, 3, [4, 5], 6, [7, 8, 9, [10]]];
// console.log(anotherDays);

const cleanDays = anotherDays.flat(Infinity);
// console.log(cleanDays);

console.log(Array.isArray("Zakariya"));
console.log(Array.from("Zakariya"));
console.log(Array.from({ name: "Zakariya" })); // interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
