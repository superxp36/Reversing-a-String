//The original string
const str = "The Big Tree!";

//Using the reverse function to reverse the string
const newStr = str
    .split('')
    .reverse()
    .join('');

console.log(newStr);