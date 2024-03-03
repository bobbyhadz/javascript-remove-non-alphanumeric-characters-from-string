// EXAMPLE 1 - Remove all non-alphanumeric Characters from a String in JS

const str = 'A!@#b$%^c&*(';

const replaced = str.replace(/[^a-z0-9]/gi, '');
console.log(replaced); // 👉️ Abc

// ------------------------------------------------------------------

// // EXAMPLE 2 - Creating a reusable function

// function removeNonAlphanumeric(string) {
//   return string.replace(/[^a-z0-9]/gi, '');
// }

// console.log(removeNonAlphanumeric('A(@#(@B$C')); // 👉️ ABC
// console.log(removeNonAlphanumeric('A_@#B(***C((_D')); // 👉️ ABCD

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove all non-alphanumeric Characters from a String using `\W`

// function removeNonAlphanumeric(string) {
//   return string.replace(/\W/g, '');
// }

// console.log(removeNonAlphanumeric('A(@#(@B$C')); // 👉️ ABC
// console.log(removeNonAlphanumeric('A_@#B(***C((_D')); // 👉️ ABCD

// ------------------------------------------------------------------

// // EXAMPLE 4 - Also removing the unerscores

// function removeNonAlphanumeric(string) {
//   return string.replace(/[^a-z0-9]/gi, '');
// }

// console.log(removeNonAlphanumeric('A(@#(@B$C')); // 👉️ ABC
// console.log(removeNonAlphanumeric('A_@#B(***C((_D')); // 👉️ ABCD
