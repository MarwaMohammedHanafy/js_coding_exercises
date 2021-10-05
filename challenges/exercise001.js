function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1) + '.' + lastName.substring(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const res = ((vatRate / 100.00) * originalPrice) + originalPrice;
  return res % 1 ? parseFloat(Number(res).toFixed(2)) : res;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const res = originalPrice - ((reduction / 100.00) * originalPrice);
  return res % 1 ? parseFloat(Number(res).toFixed(2)) : res;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const middle = str.length / 2;

  return str.length % 2 === 0 ? str.charAt(middle - 1) + str.charAt(middle) : str.charAt(middle);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => word.split('').reverse().join(''));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  users.forEach(user => {
    if (user.type === "Linux")
      count++;
  });
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
  scores.forEach(score => {
    sum += score;
  });
  const mean = sum / scores.length;
  return (mean % 1) > 0 ? parseFloat(Number(mean).toFixed(2)) : mean;

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return ((n % 3) ? '' : 'fizz') + ((n % 5) ? '' : 'buzz') || n;
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
