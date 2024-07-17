function reverseString(s) {
  let reversedString = s[s.length - 1];
  if (s.length < 0) return;
  return reverseString(s.slice(0, s.length - 1));

  return reversedString;
}

// Example usage
const inputStr = ["h", "e", "l", "l", "o"];
reverseString(inputStr);
console.log(inputStr); // Output should be ['o', 'l', 'l', 'e', 'h']
