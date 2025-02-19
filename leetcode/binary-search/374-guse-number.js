/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let right = n;
  let left = 0;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    const result = guess(mid);
    if (result > 0) {
      left = mid + 1;
    } else if (result < 0) {
      right = mid;
    } else {
      return mid;
    }
  }

  return -1;
};
