
function isPalindromeString(str) {
  console.log("Given String::" + str);

  if (str === null || str === undefined) {
    console.log("String is null");
    return;
  }

  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    console.log(str + " is a palindrome string");
  } else {
    console.log(str + " is not a palindrome string");
  }
}

isPalindromeString("teet");
  isPalindromeString("mom");
	        isPalindromeString("dad");
	        isPalindromeString("radar");
	        isPalindromeString("eye");
	        isPalindromeString("did");
	        isPalindromeString("civic");
	        isPalindromeString("rotor");
	        isPalindromeString("kayak");
	        isPalindromeString("level");
	        isPalindromeString("racecar");
	        isPalindromeString("reviver");
	        isPalindromeString("rotator");
	        isPalindromeString("repaper");
	        isPalindromeString("deified");
	        isPalindromeString("solos");
	        isPalindromeString("stats");
	        isPalindromeString("tenet");