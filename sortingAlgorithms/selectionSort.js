/*
  selectionsort is potentiall better than bubblesort if you want to avoid writing to memory alot because
  you are swapping in the end of the subloop. Bubblesort on the other hand you are swapping many times.
*/
function selectionSort(arr) {
  //first loop is to place smallest element in the leftmost unsorted index
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    //second loop is to iterate over all elements to find smallest
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    swap(arr, i, minIdx);
  }
  console.log(arr);
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

selectionSort([5, 1, 2, 3, 4]);
