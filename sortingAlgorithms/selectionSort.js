/*
  selectionsort is potentiall better than bubblesort if you want to avoid writing to memory alot because
  you are swapping in the end of the subloop. Bubblesort on the other hand you are swapping many times.
*/
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) min = arr[j];
    }
    swap(arr, i, min);
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(selectionSort([5, 1, 2, 3, 4]));
/*
[1,5,2,3,4]
[1,2,5,3,4]
[1,2,3,5,4]
[1,2,3,4,5]
*/
