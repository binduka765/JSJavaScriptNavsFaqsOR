
function isPalindrome(number) {
  const text = String(number);
  return text === text.split("").reverse().join("");
}

for (const number of [151, 152, 78987]) {
  console.log(
    `Given Number::${number}\n${isPalindrome(number) ? "palindrome number" : "not palindrome number"}`
  );
}