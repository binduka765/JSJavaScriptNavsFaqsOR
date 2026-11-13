


  let x = 5;
  let y = 10;

  // 1. Swap using a temporary variable
  // let temp = x;
  // x = y;
  // y = temp;

  // 2. Swap using addition and subtraction
  // x = x + y;
  // y = x - y;
  // x = x - y;

  // 3. Swap using multiplication and division
  // Works only when both values are nonzero.
//   x = x * y; // 50
//   y = x / y; // 5
//   x = x / y; // 10

//   console.log(x); // 10
//   console.log(y); // 5


  //4. Swap using the bitwise XOR operator (^)
  x = x ^ y;
  y = x ^ y;
  x = x ^ y;

  console.log(x); // 10
  console.log(y); // 5