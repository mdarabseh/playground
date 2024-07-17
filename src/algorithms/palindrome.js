const palindrome = (str) => {
  const validStr = returnValidStr(str);

  let left = 0;
  let right = validStr.length - 1;
  while (left < right) {
    if (validStr[left] !== validStr[right]) return false;
    left++;
    right--;
  }
  return true;
};

const returnValidStr = (str) => {
  let validStr = [];
  for (let i = 0; i < str.length; i++) {
    if ("qwertyuiopasdfghjklzxcvbnm".includes(str[i].toLowerCase()))
      validStr.push(str[i].toLowerCase());
  }
  return validStr;
};

let str = "Was it a car or a cat I saw?";
console.log(palindrome(str));
