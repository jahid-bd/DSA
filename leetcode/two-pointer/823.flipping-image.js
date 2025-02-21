/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  // loop over the the array
  for (let i = 0; i < image.length; i++) {
    // pointers
    let el = image[i];
    let newEl = [];

    let left = 0;
    let right = el.length - 1;

    while (left < right) {
      // reverse the element using swap
      let temp = el[left];
      el[left] = el[right];
      el[right] = temp;

      left++;
      right--;
    }

    // inverse
    for (let j = 0; j < el.length; j++) {
      newEl.push(el[j] === 0 ? 1 : 0);
    }
    image[i] = newEl;
  }

  return image;
};

const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

console.log(flipAndInvertImage(image));

/**
 * [0,1,1]
 * step 1 = 0 = 1 & 1 = 0
 * increment = left =  1 & right = 1
 * step 2 = 1  & 1 = 1
 *
 * [1,0,0]
 *
 */

const el = [1, 1, 0];

let left = 0;
let right = el.length - 1;

while (left < right) {
  let temp = el[left];
  el[left] = el[right];
  el[right] = temp;

  left++;
  right--;
}

let el2 = [0, 1, 1];
let map = {
  0: 1,
  1: 0,
};
const newArr = [];
for (let j = 0; j < el.length; j++) {
  newArr.push(map[j]);
}

console.log(el2);
