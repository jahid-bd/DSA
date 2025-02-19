function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (end > start) {
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }

    mid = Math.floor((start + end) / 2);
  }

  if (target > nums[mid]) {
    return mid + 1;
  }
  return mid;
}

console.log(searchInsert([1, 3], 2));
console.log(searchInsert([-1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 0));
