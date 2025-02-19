// function nextGreatestLetter(letters, target) {
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] > target) {
//       return letters[i];
//     }
//   }
//   return letters[0];
// }

// console.log(nextGreatestLetter(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 'd'));

// nextgretest = target
// find nextgreatest latter each element -> loop -> letters[i] > target -> if true -> return nextgreatest

// my target a and array = a, b, c, e, f

// letters[i] > target && letters[i] < letters[i + 1]

// <-- solution in Binary search -->

function nextGreatestLetter(letters, target) {
  let start = 0;
  let end = letters.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (end > start) {
    if (target === letters[mid]) {
      if (letters[mid + 1] === target) {
        start = mid + 1;
      }
      return letters[mid + 1];
    } else if (target > letters[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }

    mid = Math.floor((start + end) / 2);
  }

  if (target > letters[mid]) {
    return letters[0];
  }

  if (target === letters[mid] && mid === letters.length - 1) {
    return letters[0];
  }

  return letters[mid];
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'));
console.log(nextGreatestLetter(['c', 'f', 'j'], 'j'));
console.log(nextGreatestLetter(['c', 'f', 'j'], 'g'));
console.log(nextGreatestLetter(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'e'));
console.log(nextGreatestLetter(['e', 'e', 'e', 'g', 'g', 'h', 'h'], 'e'));
