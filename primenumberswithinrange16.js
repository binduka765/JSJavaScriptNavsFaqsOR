
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbersWithinRange(num) {
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) {
      primes.push(i);
    }
  }

  console.log(primes.join(" "));
}

getPrimeNumbersWithinRange(20); // 2 3 5 7 11 13 17 19