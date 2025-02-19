const nums1 = [1, 1, 3, 2];
const nums2 = [2, 3];
const nums3 = [3];

var twoOutOfThree = function (nums1, nums2, nums3) {
  let nums1Obj = {};
  let nums2Obj = {};
  let nums3Obj = {};

  // convert array to object and set property count 0
  for (let i = 0; i < nums1.length; i++) {
    nums1Obj[nums1[i]] = 0;
  }
  for (let i = 0; i < nums2.length; i++) {
    nums2Obj[nums2[i]] = 0;
  }

  for (let i = 0; i < nums3.length; i++) {
    nums3Obj[nums3[i]] = 0;
  }

  // match and increase count
  for (let i = 0; i < nums1.length; i++) {
    if (nums2Obj[nums1[i]] !== undefined) {
      nums2Obj[nums1[i]] = nums2Obj[nums1[i]] + 1;
    }

    if (nums3Obj[nums1[i]] !== undefined) {
      nums3Obj[nums1[i]] = nums3Obj[nums1[i]] + 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Obj[nums2[i]] !== undefined) {
      nums1Obj[nums2[i]] = nums1Obj[nums2[i]] + 1;
    }

    if (nums3Obj[nums2[i]] !== undefined) {
      nums3Obj[nums2[i]] = nums3Obj[nums2[i]] + 1;
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    if (nums1Obj[nums3[i]] !== undefined) {
      nums1Obj[nums3[i]] = nums1Obj[nums3[i]] + 1;
    }

    if (nums2Obj[nums3[i]] !== undefined) {
      nums2Obj[nums3[i]] = nums2Obj[nums3[i]] + 1;
    }
  }

  let result = [];
  let obj = { ...nums1Obj, ...nums2Obj, ...nums3Obj };

  for (const key in obj) {
    if (obj[key] > 0) result.push(Number(key));
  }

  return result;
};

var twoOutOfThree = function (nums1, nums2, nums3) {
  const result = [];
  const counters = {};

  // Count occurrences in each array
  const countOccurrences = (nums) => {
    const uniqueNums = new Set(nums);
    console.log(uniqueNums);
    for (const num of uniqueNums) {
      counters[num] = (counters[num] || 0) + 1;
    }
  };

  countOccurrences(nums1);
  countOccurrences(nums2);
  countOccurrences(nums3);

  // Add numbers with at least 2 occurrences to the result
  for (const key in counters) {
    if (counters[key] >= 2) {
      result.push(Number(key));
    }
  }

  return result;
};

console.log(twoOutOfThree(nums1, nums2, nums3));
