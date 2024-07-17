const randomString = "ABCDDDEFGHIIPYTDRJHHGF";
const compare = (a, b) => b.length - a.length;
const getLongestUnrepeatedString = (text) => {
  let nonRepeatedStrings = [];
  for (i = 0; i < text.length; i++) {
    // check if array the last index contains the char
    // if yes push to the array
    // else append to text
    if (
      !nonRepeatedStrings[nonRepeatedStrings.length - 1] ||
      (nonRepeatedStrings.length >= 0 &&
        nonRepeatedStrings[nonRepeatedStrings.length - 1].includes(text[i]))
    )
      nonRepeatedStrings.push(text[i]);
    else nonRepeatedStrings[nonRepeatedStrings.length - 1] += text[i];
  }
  return nonRepeatedStrings.sort(compare)[0];
};
console.log(getLongestUnrepeatedString(randomString));
