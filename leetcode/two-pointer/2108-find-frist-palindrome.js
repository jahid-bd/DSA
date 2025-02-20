/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  // loop over the array
  for (let i = 0; i < words.length; i++) {
    let word = words[i]; // current word
    let left = 0; // left pointer
    let right = word.length - 1; // right pointer
    let isPalindrome = true;

    // check plindrome with two pointer
    while (left < right) {
      if (word[left] !== word[right]) {
        isPalindrome = false;
        break;
      } else {
        left++;
        right--;
      }
    }

    if (isPalindrome) {
      return word;
    }
  }

  // there are no palindrome
  return "";
};

const words = ["abc", "car", "ada", "racecar", "cool"];

console.log(firstPalindrome(words));
