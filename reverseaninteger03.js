
// 1. Reverse using arithmetic
let num = 12345;
let rev = 0;

while (num !== 0) {
  rev = rev * 10 + (num % 10);
  num = Math.trunc(num / 10);
}

console.log("Reverse number is:", rev);

// 2. Reverse using string methods
const num1 = 12345;
const reversed = String(num1).split("").reverse().join("");

console.log(reversed);