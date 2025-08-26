// Solution 1 - With includes()
const countVowelsUsingIncludes = (str) => {
  const string = str.toLowerCase().replace(/[^a-z]/g, "");
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
};
console.log(countVowelsUsingIncludes("Dhyana"));

// Solution 2 - With Set
const countVowelsUsingSet = (str) => {
  const string = str.toLowerCase().replace(/[^a-z]/g, "");
  let count = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < string.length; i++) {
    if (vowels.has(string[i])) {
      count++;
    }
  }

  return count;
};
console.log(countVowelsUsingSet("Dhyana"));