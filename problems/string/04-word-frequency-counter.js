const wordFrequencyCounterUsingMap = (str) => {
  let words = str.split(" ");
  const freq = new Map();
  for (let i = 0; i < words.length; i++) {
    if (freq.has(words[i])) {
      freq.set(words[i], freq.get(words[i]) + 1);
    } else {
      freq.set(words[i], 1);
    }
  }
  for (let [word, count] of freq) {
    console.log(`${word} → ${count}`);
  }
  // return freq;
};

wordFrequencyCounterUsingMap("I like React Native and I like JavaScript");