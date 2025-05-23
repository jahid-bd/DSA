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
  let left = 1;
  let right = n;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const target = guess(mid);

    if (target === 0) {
      return mid;
    } else if (target === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

function guess(num) {
  const g = Math.floor(Math.random() * 6);

  if (num < g) {
    return -1;
  } else if (num > g) {
    return 1;
  } else {
    return 0;
  }
}

console.log(guessNumber(9));
