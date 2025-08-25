// Solution 1 – Using Object
const firstNonRepeatingCharUsingObject = (str) => {
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in freq) {
      freq[str[i]] = freq[str[i]] + 1;
    } else {
      freq[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] == 1) {
      return str[i];
    }
    // for first repeating character
    // if (freq[str[i]] > 1) {
    //   return str[i];
    // }
  }
};
console.log(firstNonRepeatingCharUsingObject("Dhyana"));

// Solution 2 – Using Map
const firstNonRepeatingCharUsingMap = (str) => {
  const freq = new Map();
  for (let i = 0; i < str.length; i++) {
    if (freq.has(str[i])) {
      freq.set(str[i], freq.get(str[i]) + 1);
    } else {
      freq.set(str[i], 1);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (freq.get(str[i]) === 1) {
      return str[i];
    }
  }
};
console.log(firstNonRepeatingCharUsingMap("Dhyana"));