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

function guessNumber(n: number): number {
  let left: number = 1;
  let right: number = n;
  let mid: number = Math.floor((left + right) / 2);

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

  return mid;
}

function guess(num: number): number {
  const g: number = Math.floor(Math.random() * 6);

  if (num < g) {
    return -1;
  } else if (num > g) {
    return 1;
  } else {
    return 0;
  }
}

console.log(guessNumber(9));
