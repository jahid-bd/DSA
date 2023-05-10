function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (end >= start) {
    let mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 3, 5, 7, 10, 15, 18, 20, 24], 7));
