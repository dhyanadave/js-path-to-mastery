// Solution 1 - Built-in Method – Using JS array methods (reverse)
const reverseArray = (arr) => {
//   return arr.reverse(); //Mutate original array
    return [...arr].reverse(); //Will not mutate original array
};

console.log(reverseArray([1, 2, 3, 4]));

// Solution 2 - Loop from End – Create a new array by iterating backward
const reverseArrayUsingLoop = (arr) => {
  const reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i++) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
};
console.log(reverseArray([1,2,3,4]))