
function isArmstrongNumber(num) {
  console.log(`Given number::${num}`);

  let sum = 0;
  let temp = num;

  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    sum += digit * digit * digit;
  }

  if (temp === sum) {
    console.log("This is an Armstrong number");
  } else {
    console.log("This is not an Armstrong number");
  }
}

isArmstrongNumber(1);