/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   let tempIdx = 0;
//   let sum = 0;
//   let length = nums.length;
//   let count = 1;

//   while (tempIdx !== length - 1) {
//     sum = nums[tempIdx] + nums[count];

//     if (sum === target) {
//       return [tempIdx, count];
//     }

//     if (count === length) {
//       tempIdx += 1;
//       count = tempIdx + 1;
//     } else {
//       count += 1;
//     }
//   }
// };

var twoSum = function (nums, target) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }
};

const nums = [2, 7, 11, 15];
const target = 17;

console.log(twoSum(nums, target));
