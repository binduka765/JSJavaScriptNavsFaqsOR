

  function isPrimeNumber(num) {
    // Numbers less than 2 are not prime.
    if (num <= 1) {
      return false;
    }

    // Check possible divisors up to the square root of num.
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  console.log(isPrimeNumber(2));  // true
  console.log(isPrimeNumber(6));  // false
  console.log(isPrimeNumber(9));  // false
  console.log(isPrimeNumber(10)); // false
  console.log(isPrimeNumber(1));  // false
  console.log(isPrimeNumber(0));  // false
  console.log(isPrimeNumber(3));  // true
  console.log(isPrimeNumber(17)); // true