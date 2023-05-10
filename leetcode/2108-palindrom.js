const words = ['abc', 'car', 'ada', 'racecar', 'cool'];

function firstPalindrome(words) {
  function isPalindrome(word) {
    let i = 0;
    let j = word.length - 1;

    while (i < j) {
      if (word[i] !== word[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }
  return '';
}

console.log(firstPalindrome(words));
