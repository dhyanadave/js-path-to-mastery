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