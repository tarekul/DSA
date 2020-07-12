module.exports = function linearSearch(arr, val) {
  //iterate over each element until val is found

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};
