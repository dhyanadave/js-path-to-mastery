//Solution 1 - Using Set
const removeDuplicatesUsingSet = (arr) => {
  if (!arr.length) return [];
  var newArr = [...new Set(arr)];
  return newArr;
};

console.log(removeDuplicatesUsingSet([]));