
const names = ["Java", "JavaScript", "Ruby", "C", "Python", "Java"];

console.log("--- using pairwise comparison: O(n²) ---");

for (let i = 0; i < names.length; i++) {
  for (let j = i + 1; j < names.length; j++) {
    if (names[i] === names[j]) {
      console.log("Duplicate element is:", names[i]);
    }
  }
}

console.log("--- using Set: O(n) ---");

const seen = new Set();

for (const name of names) {
  if (seen.has(name)) {
    console.log("Duplicate element is:", name);
  } else {
    seen.add(name);
  }
}

console.log("--- using Map frequency counts: O(n) ---");

const counts = new Map();

for (const name of names) {
  counts.set(name, (counts.get(name) ?? 0) + 1);
}

for (const [name, count] of counts) {
  if (count > 1) {
    console.log("Duplicate element is:", name);
  }
}