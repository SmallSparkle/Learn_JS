// Loops basics
const numbers = [1, 2, 22, 87, 98, 101];

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
console.log("Hello after while");

// for

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
  console.log(numbers[i]);
}
console.log(numbers);

//  Loop break
// prompt('text') - open popup with field(answer will be a str) +prompt('text') - answer will be a number

let tries = 0;
while (tries < 3) {
  const age = +prompt("How old are you?");
  if (age) {
    alert("Welcome");
    break;
  }
  tries++;
  alert("Incorrect data");
}
alert("End");

// Loop continue

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
}

const numbers = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15];

const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
    if (evenNumbers.length === 3) {
      break;
    }
  }
}
console.log(evenNumbers);
