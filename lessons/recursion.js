function demo(n) {
  // base case (U turn)
  if (n > 10) return;

  // proccesing
  console.log(n + ': Hello world');
  demo(n + 1);
}

// demo(1);

// array iterate
const arr = [1, 2, 3, 4, 5];

function iterate(arr, i) {
  if (i === arr.length) {
    return;
  }

  console.log(arr[i]);
  iterate(arr, i + 1);
}

iterate(arr, 0);

// array reverse
function reverse(arr, fi, bi) {
  if (fi > bi) {
    return;
  }

  const temp = arr[fi];
  arr[fi] = arr[bi];
  arr[bi] = temp;

  reverse(arr, fi + 1, bi - 1);

  return arr;
}

// console.log(reverse(arr, 0, arr.length - 1));

// palindrome
const word = 'mome';

function palindrome(word, fi, bi) {
  if (fi > bi) return;

  if (word[fi] !== word[bi]) return false;

  palindrome(word, fi + 1, bi - 1);

  return true;
}

console.log(palindrome(word, 0, word.length - 1));
