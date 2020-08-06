/*
Worst Case  Avg Case  Best Case
  O(nlogn)      O(nlogn)   O(nlogn)
*/

function mergeSort(arr) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  return arr;
}

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j] || j > arr2.length - 1) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || i > arr1.length - 1) {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
};

console.log(mergeSort([4, 3, 5, 6, 1, 2]));
