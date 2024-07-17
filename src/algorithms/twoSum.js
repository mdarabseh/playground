let numbers = [0, 11, 7, 15, 4, 6, 2, 56, 54, 22, 3, 4, 6, 7, 9, 0, 8];
let target = 33;

const getTwoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
console.log(getTwoSum(numbers, target));
