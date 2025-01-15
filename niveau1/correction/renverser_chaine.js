function reverseString(word) {
  let string_reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    string_reversed += word[i];
  }
  return string_reversed;
}

console.log(reverseString("hello"));
