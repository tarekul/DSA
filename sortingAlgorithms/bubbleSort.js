function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

bubbleSort([5, 1, 2, 3, 4]);
