function merge(arr1, arr2, cb = null) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (cb) {
      if (cb(arr1[i], arr2[j]) <= 0) {
        result.push(arr1[i]);
        i++;
      } else if (cb(arr1[i], arr2[j]) > 0) {
        result.push(arr2[j]);
        j++;
      }
    } else {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      }
      if (arr2[j] < arr1[i]) {
        result.push(arr2[j]);
        j++;
      }
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr, cb = null) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), cb);
    const right = mergeSort(arr.slice(mid), cb);

    return merge(left, right, cb);
  }

  return arr;
}

//console.log(mergeSort([-2, -1, 0, 4, 5, 6, -3, -2, -1, 2, 3, 5, 7, 8]));

function oldestToYoungest(a, b) {
  return b.age - a.age;
}
console.log(
  mergeSort(
    [
      { name: "Tarek", age: 26 },
      { name: "Siddik", age: 27 },
      { name: "Farzana", age: 21 },
      { name: "Farhana", age: 24 },
    ],
    oldestToYoungest
  )
);
