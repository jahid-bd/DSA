function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const smallest = findSmallest(arr);
    // console.log(smallest);
    newArr.push(arr.pop(smallest));
    // arr.slice(smallest, 1);
  }

  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
