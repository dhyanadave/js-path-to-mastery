// Solution 1 - Using Math.max & Math.min
const findMaxMinMath = (arr) => {
  if (!arr.length) return "Array is empty";
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `Max: ${max} Min: ${min}`;
};
console.log(findMaxMinMath([1, 2, 3, 4]));

// Solution 2 - Using sort
const findMaxMinSort = (arr) => {
  if (!arr.length) return "Array is empty";

  const sortedArr = [...arr].sort((a, b) => a - b);
  return `Max: ${sortedArr[sortedArr.length - 1]} Min: ${sortedArr[0]}`;
};
console.log(findMaxMinSort([1, 2, 3, 4]));
