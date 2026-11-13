
let s = "!@#$%12345)testing(*&^98765";

s = s.replace(/[^a-zA-Z0-9]/g, "");

console.log(s); // 12345testing98765