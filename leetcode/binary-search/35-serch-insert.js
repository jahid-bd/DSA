/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  if (nums[mid] > target) {
    if (mid - 1 < 0) {
      return 0;
    }
    return mid - 1;
  } else {
    return mid + 1;
  }
};

console.log(searchInsert([-4, 1, 3, 5, 6, 8], -5));

// Binary Serch role
/**
 * found target at the midle of the array
 * step 1. divide array into 2 pice
 * step 2. find target at the middle index
 * step 3. if not found compare that the value has left or right
 * step 4. if target as left then divide left array
 * step 5. if trarget has right then divide array into pice right array
 *
 */

// if not found return it's correct position
/**
 *
 */

//  array is  sorted
