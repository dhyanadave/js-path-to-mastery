const findLongestWord = (str) => {
  if (!str || !str.trim()) return null;

  const words = str.trim().split("/\s/+");
  let longestWord = words[0];
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
console.log(findLongestWord("My Name is Dhyana Dave"));
