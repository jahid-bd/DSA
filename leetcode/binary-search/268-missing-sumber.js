/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let actualSum = nums.reduce((prev, curr) => prev + curr);
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;

  return expectedSum - actualSum;
};

console.time("expectedTime");
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.timeEnd("expectedTime");
