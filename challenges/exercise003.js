function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let res = words[0];
  for (let i = 1; i < words.length; i++) {
    res += words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
  }
  return res;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totalSubjectsCount = 0;
  people.forEach(student => {
    totalSubjectsCount += student.subjects.length;
  });
  return totalSubjectsCount;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return (menu.some(receipe => {
    return receipe.ingredients.some(i => {
      return i === ingredient;
    });
  }));
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const commonArray = arr1.filter(num1 => arr2.includes(num1));
  const resNoDuplicated = [];
  commonArray.forEach(num => {
    if (!resNoDuplicated.includes(num))
      resNoDuplicated.push(num);
  });
  return resNoDuplicated.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
