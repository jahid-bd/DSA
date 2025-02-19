// There are three type of two pointer algorithm
// 1. Forward and backword
// 2. Fast and Slow (its for link list)
// 3. Two diferent array

// Forward and Backword
// this technic used for revert a array

// first i will revert a array with bullect force algorithm that mens with nested loop

const arr = [2, 3, 5, 6];

function bulletForceTec(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      console.log(arr);
    }
    console.log(arr);
  }
  console.log(arr);
  return arr;
}

// bulletForceTec(arr)

function twopointer1(arr) {
  let size = arr.length - 1;
  let temp;

  for (let i = 0, j = size; i < j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

console.log(twopointer1(arr));

function isPalindrom(arr) {
  let size = arr.length - 1;

  for (let i = 0, j = size; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrom("racecar"));
