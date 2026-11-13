
const text = "canada";

for (let i = 0; i < text.length; i++) {
  let alreadyReported = false;

  // Skip the character if it appeared earlier
  for (let k = 0; k < i; k++) {
    if (text[i] === text[k]) {
      alreadyReported = true;
      break;
    }
  }

  if (alreadyReported) continue;

  let count = 0;
  for (let j = 0; j < text.length; j++) {
    if (text[i] === text[j]) {
      count++;
    }
  }

  if (count > 1) {
    console.log(`${text[i]} appears ${count} times`);
  }
}