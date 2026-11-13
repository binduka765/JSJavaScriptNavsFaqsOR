

const text = "canada";
const counts = new Map();

// Count each character
for (const char of text) {
  counts.set(char, (counts.get(char) || 0) + 1);
}

// Print characters that appear more than once
for (const [char, count] of counts) {
  if (count > 1) {
    console.log(`${char} appears ${count} times`);
  }
}