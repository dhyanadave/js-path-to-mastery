// Solution 1 – Using built-in split + reverse + join
const reverseStringUsingBuiltIn = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseStringUsingBuiltIn("Hello"));

// Solution 2 – Using for loop (no built-ins)
const reverseStringUsingLoop = (str) => {
  var result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
};
console.log(reverseStringUsingLoop("Hello"));

// Solution 2 – Using Recursion
const reverseStringRecursion = (str) => {
  if (str === "") return ""; //base case
  return reverseStringRecursion(str.substr(1)) + str[0];
};
console.log(reverseStringRecursion("Hello"));
