const userInput = prompt("Enter Something");

if (userInput) {
  console.log("TRUTHY");
} else console.log("FALSY");

// if (0) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// if (null) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// if (NaN) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// if (undefined) {
//     console.log("Truthy");
//   } else {
//     console.log("Falsy");
//   }

if (" ") {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
