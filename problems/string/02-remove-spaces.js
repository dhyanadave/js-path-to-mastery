// Solution 1 – Using for loop
const removeSpacesUsingLoop = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      result = result + str[i];
    }
  }
  return result;
};
console.log(removeSpacesUsingLoop("My name is dhyana"));

// Solution 2 – Using Replace function
const removeSpacesUsingReplace = (str) => {
  return str.replace(/ /g, "");
};
console.log(removeSpacesUsingReplace("My name is dhyana"));
