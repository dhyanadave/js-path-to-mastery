const isPalindrome = (str) => {
  const string = str.toLowerCase().replace(/[^a-z]/g, "");
  const reverseString = string.split("").reverse().join("");
  return string === reverseString;
};

console.log(isPalindrome("madam"));