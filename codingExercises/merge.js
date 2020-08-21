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

function strLengthComp(str1, str2) {
  return str1.length - str2.length;
}

//console.log(merge([-2, -1, 0, 4, 5, 6], [-3, -2, -1, 2, 3, 5, 7, 8]));
console.log(merge(["Tarek", "Farhana"], ["Siddik", "Farzana"], strLengthComp));
