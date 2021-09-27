function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substring(1,word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1)+'.' + lastName.substring(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  //console.log(((vatRate/100.0)*originalPrice) + originalPrice);
  let res = ((vatRate/100.00)*originalPrice) + originalPrice;
  //console.log(Number(res).toFixed(2));
  return res%1 === 0? res : parseFloat(Number(res).toFixed(2)); //Number(res).toFixed(2) return string need to change to float 
  //return res%1 == 0? res : res.toPrecision(4);//return string 
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let res = originalPrice - ((reduction/100.00)*originalPrice);
  return res%1 === 0? res : parseFloat(Number(res).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let middle = str.length/2 ;
  //return str.length %2 === 0? str.substring(middle-1,middle)+ str.substring(middle,middle+1):str.substring(middle,middle+1);
  return str.length %2 === 0? str.charAt(middle-1) + str.charAt(middle):str.charAt(middle);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
