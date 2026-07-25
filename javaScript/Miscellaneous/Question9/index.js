let count = 0;
function vowelFunc(vowels) {
  for (let i = 0; i < vowels.length; i++) {
    if (
      vowels[i] == "a" ||
      vowels[i] == "e" ||
      vowels[i] == "i" ||
      vowels[i] == "o" ||
      vowels[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(vowelFunc("I will become billionaire one day"));
