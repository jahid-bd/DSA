// function binarySearch(array, foundItem) {
//   let low = 0;
//   let high = array.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((high + low) / 2);

//     const gusses = array[mid];

//     if (gusses == foundItem) {
//       return mid;
//     } else if (gusses < foundItem) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
// }

// const arr = [];

// for (let i = 0; i < 100000; i++) {
//   arr.push(i);
// }

// console.log(binarySearch(arr, 99998));
// console.log(2 ** 32);

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const target = 100;

// function binarySearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let count = 0;

//   while (start <= end) {
//     console.log((count += 1));
//     const mid = Math.floor((start + end) / 2);

//     if (arr[mid] === target) {
//       return `Target found at index ${mid}`;
//     } else if (target > arr[mid]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return 'Data Not found';
// }

// console.log(binarySearch(arr, target));

//O(log n)

//100cr

const arr1 = [10, 15, 20, 25, 30, 40, 50]; // accending order
const target = 25;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch(arr1, target));
