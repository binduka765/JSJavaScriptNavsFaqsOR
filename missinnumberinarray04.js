
const b = [1, 2, 3, 4, 5, 6, 7, 8, 10];

let sum = 0;
for (let i = 0; i < b.length; i++) {
  sum += b[i];
}
console.log(sum); // Sum of array elements

// Expected sum for numbers from 1 to 10
let sum1 = 0;
for (let j = 1; j <= 10; j++) {
  sum1 += j;
}
console.log(sum1); // 55

const missingNumber = sum1 - sum;
console.log(missingNumber);
console.log("Missing number in array:", missingNumber);