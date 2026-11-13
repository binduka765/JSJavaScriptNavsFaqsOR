
const numbers = [-10, 24, 50, 947656, 94657];

let largest = numbers[0];
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log("Given array is:", numbers);
console.log("Largest number is:", largest);
console.log("Smallest number is:", smallest);