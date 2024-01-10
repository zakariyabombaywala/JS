// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 3, 21);
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024, 3, 21, 12, 0, 0);
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2024-03-21");
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("04-25-2024");
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getUTCDate());
// console.log(newDate.getUTCDay());

console.log(
  newDate.toLocaleString("defaulf", {
    weekday: "short",
    day: "numeric",
    era: "long",
  })
);
