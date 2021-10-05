function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return (nums.filter(num => num < 1));
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.charAt(0) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.substring(0, 3) === 'to ');
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const res = [];
  users.forEach(user => {
    res.push(user.data.city.displayName);
  });
  return res;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(num => {
    const numSqrt = Math.sqrt(num);
    return (numSqrt % 1 ? parseFloat(numSqrt.toFixed(2)) : numSqrt);
  });

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const res = [];
  triangles.forEach(triangle => res.push(Math.max(...triangle)));
  return res;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
