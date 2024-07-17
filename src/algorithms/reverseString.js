function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap the elements at left and right pointers
    [s[left], s[right]] = [s[right], s[left]];

    // Move the pointers
    left++;
    right--;
  }
}

// Example usage
const inputStr = ["h", "e", "l", "l", "o"];
reverseString(inputStr);
console.log(inputStr); // Output should be ['o', 'l', 'l', 'e', 'h']
