

 
  // JavaScript strings are immutable. Methods like reverse() aren't
  // available directly on strings; convert to an array to reverse one.
  // Strings can be concatenated with values of other types.

  const str = "The rains have started here";
  const str1 = "the rains have started here";

  console.log(str.indexOf("r"));       // 4
  console.log(str.indexOf("have"));    // 10
  console.log(str.indexOf("hello"));   // -1
  console.log(str === str1);           // false: case-sensitive comparison
  console.log(str.toLowerCase() === str1.toLowerCase()); // true

  // substring(startIndex, endIndex); endIndex is not included
  console.log(str.substring(0, 8));    // The rain

  // trim() removes whitespace at the beginning and end, not between words
  const s = "   Hello  World  ";
  console.log(s.trim());               // Hello  World
  console.log(s.replaceAll(" ", ""));  // HelloWorld

  const date = "01-01-2017";
  console.log(date.replaceAll("-", "/")); // 01/01/2017

  const test = "Hello_World_Test_Selenium";
  const testVal = test.split("_");

  console.log("---for each loop---");
  for (const part of testVal) {
    console.log(part);
  }

  console.log("--index-based for loop--");
  for (let i = 0; i < testVal.length; i++) {
    console.log(testVal[i]);
  }

  const s2 = "cares";
  console.log(s2.concat("s")); // caress

  const x = "Hello";
  const y = "World";
  const a = 100;
  const b = 200;

  console.log(x + y);        // HelloWorld
  console.log(a + b);        // 300
  console.log(x + y + a + b); // HelloWorld100200
  console.log(a + b + x + y); // 300HelloWorld
  console.log(x + y + (a + b)); // HelloWorld300