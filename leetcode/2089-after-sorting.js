function targetIndices(nums, target) {
  // sort the arry by buble sort
  function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  sort(nums);

  // search target by binary search
  let start = 0;
  let end = nums.length - 1;

  const result = [];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) {
      result.push(mid);

      // find how many dublicates in the left side
      let l = mid - 1;

      while (target === nums[l]) {
        if (target === nums[l]) {
          result.push(l);
          l -= 1;
        }
      }

      // find how many dublicates in left side
      let r = mid + 1;

      while (target === nums[r]) {
        if (target === nums[r]) {
          result.push(r);
          r += 1;
        }
      }

      return sort(result);
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}

const nums = [2, 1, 3, 2, 7, 5, 2, 9, 2, 4, 1, 2];

console.log(targetIndices(nums, 2));
// console.log(targetIndices([1, 2, 5, 2, 3], 3));
// console.log(targetIndices([1, 2, 5, 2, 3], 5));
