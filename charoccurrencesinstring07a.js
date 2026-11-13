
const str = "The rains have started here, so sowing seeds";

  console.log(str.length);
  console.log(str.charAt(5));

  console.log(str.indexOf("s"));     // First occurrence: 8
  console.log(str.indexOf("s", 9));  // Search from index 9: 15

  const first = str.indexOf("s");
  const second = str.indexOf("s", first + 1);
  const third = str.indexOf("s", second + 1);
  const fourth = str.indexOf("s", third + 1);

  console.log(second); // 15
  console.log(third);  // 29
  console.log(fourth); // 32