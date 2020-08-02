function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
      console.log(arr);
    }
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(insertionSort([3, 44, 38, 5, 47, 15]));
/*
[]


*/
