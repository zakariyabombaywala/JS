// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "Non-Fiction");

userBooks = books.filter((bk) => {
  return bk.publish <= 2000 && bk.genre === "Non-Fiction";
});
// console.log(userBooks);

// map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumers = myNumers.map((num) => num + 5);

const newNumers = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
// console.log(newNumers);

// reduce

const nums = [1, 2, 3, 4, 5];

// const total = nums.reduce((acc, crr) => {
//   console.log(`acc : ${acc} and crr : ${crr}`);
//   return acc + crr;
// }, 0);

const total = nums.reduce((acc, crr) => acc + crr, 0);

// console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const payPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(payPrice);
