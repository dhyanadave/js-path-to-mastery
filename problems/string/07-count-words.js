const countWords = (str) => {
  const words = str.trim().split(/\s+/).filter(Boolean); 
  return words.length;
};
console.log(countWords("   My name   is   Dhyana      Dave   "));

//trim => remove leading and trailing spaces
//split => split the string by one or more spaces → returns an array of words
//filter => remove any empty strings from the array