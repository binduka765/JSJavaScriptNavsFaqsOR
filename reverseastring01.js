
const s = "selenium";

// 1. Reverse using a loop
const len = s.length;
console.log(len);

let rev = "";

for (let i = len - 1; i >= 0; i--) {
  rev += s[i];
}

console.log(rev);

// 2. Reverse using built-in array methods
const reversed = s.split("").reverse().join("");
console.log(reversed);