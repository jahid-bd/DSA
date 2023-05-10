const array = [5, 7, 13, 3, 10, 5, 6, 2];

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
  }
  return arr;
}

console.log(sort(array));
