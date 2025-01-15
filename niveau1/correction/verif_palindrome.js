function checkPalindrome(word) {
  word = word.toLowerCase();

  for (i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(checkPalindrome("hello"));
console.log(checkPalindrome("Radar"));
