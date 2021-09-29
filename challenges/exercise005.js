const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const NumberIndex = nums.findIndex(num => num == n);
  if (NumberIndex == nums.length - 1 || NumberIndex == -1) return null;
  return nums[NumberIndex + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const resObj = { '0': 0, '1': 0 };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    resObj[char] === undefined ? resObj[char] = 1 : resObj[char] += 1;
  }
  return (resObj);
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  arrs.forEach(arr => {
    arr.forEach(num => {
      sum += num;
    });
  });
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let p in haystack) {
    //console.log(haystack[p].toLowerCase())
    if (haystack[p].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let wordFreq = {};
  str = str.toLowerCase();
  str = str.replace(/(!|,|\?)/g, "")
  let wordArray = str.split(' ');
  wordArray.forEach(word => {
    wordFreq[word] === undefined ? wordFreq[word] = 1 : wordFreq[word] += 1;
  });
  return wordFreq;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
