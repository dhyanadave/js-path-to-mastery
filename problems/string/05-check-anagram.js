// Solution 1 - Using Sorting
function checkAnagramUsingSorting(str1, str2) {
  const normalize = (str) => {
    return str.toLowerCase().replace(/[^a-z]/g, ""); //remove all non letters
  };

  const string1 = normalize(str1);
  const string2 = normalize(str2);

  if (string1.length !== string2.length) {
    return false;
  }

  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
}
console.log(checkAnagramUsingSorting("listen to", "Silent To"));

// Solution 2 - Using Map
function checkAnagramUsingMap(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq1 = new Map();
  const freq2 = new Map();

  const normalize = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
  };

  const string1 = normalize(str1);
  const string2 = normalize(str2);

  for (let i = 0; i < str1.length; i++) {
    if (freq1.has(string1[i])) {
      freq1.set(freq1.get(string1[i]) + 1);
    } else {
      freq1.set(string1[i], 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (freq2.has(string2[i])) {
      freq2.set(freq2.get(string2[i]) + 1);
    } else {
      freq2.set(string2[i], 1);
    }
  }

  for (let [key, value] of freq1) {
    if (!freq2.has(key) || freq2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

console.log(checkAnagramUsingMap("listen", "silent"));