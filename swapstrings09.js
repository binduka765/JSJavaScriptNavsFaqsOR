
 let a = "hello";
  let b = "world";

  console.log("before swapping:");
  console.log("value of a: " + a);
  console.log("value of b: " + b);

  // Append both strings
  a = a + b; // "helloworld"

  // Recover the original a into b
  b = a.substring(0, a.length - b.length);

  // Recover the original b into a
  a = a.substring(b.length);

  console.log("values after swapping:");
  console.log("value of a: " + a);
  console.log("value of b: " + b);