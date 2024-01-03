const name = "Zakariya";
const repoCount = 10;

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const personName = new String("Zakariya-Be-2023");
console.log(personName.split("-"));

console.log(personName[0]);

// console.log(personName.length);
// console.log(personName.toUpperCase());
// console.log(personName.charAt(9)); // shows char at index
// console.log(personName.indexOf("a")); // shows char index

const newName = personName.substring(2, 6);
// console.log(newName);

const anoName = personName.slice(3, 8);
// console.log(anoName);

const spaceChar = "    learning        ";
// console.log(spaceChar);
// console.log(spaceChar.trim());

const url = "https://zak.com//zak%1bombay";

// console.log(url.replace("%1", "-"));
// console.log(url.includes("zak"));
