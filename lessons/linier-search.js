const arr = [12, 4, 6, 78, 60, 40];

const target = 60;

function find(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tar) {
      return `Target found in ${i} number index`;
    }
  }
  return 'Data Not Found';
}

console.log(find(arr, target));
