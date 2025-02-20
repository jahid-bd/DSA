/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // take two pointer
  let left = 0;
  let right = s.length - 1;

  // take a while conditon booth pointer is not cors
  while (left < right) {
    // swap the item
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    // increase the pointer
    left++;
    right--;
  }

  // return the result
  return s;
};

const arr = ["h", "e", "l", "l", "o"];

console.log(reverseString(arr));
