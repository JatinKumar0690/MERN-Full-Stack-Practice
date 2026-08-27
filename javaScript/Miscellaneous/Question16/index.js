function countOccurrences(arr) {
  const counts = {};

  arr.forEach((item) => {
    // If the key exists, increment it; otherwise, initialize it to 1
    counts[item] = (counts[item] || 0) + 1;
  });

  return counts;
}

// Test case
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countOccurrences(fruits));
