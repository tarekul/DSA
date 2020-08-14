function twoSum(arr, target) {
  const s = radixSort(arr); //O(nk) where n is total numbers and k is the most digits of a num in the arr
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (s[i] + s[j] === target) return true;
    else if (s[i] + s[j] > target) j--;
    else i++;
  }
  return false;
}

console.log(twoSum([32, 3, 12, 1, 22, 56, 234], 246));

function getDigit(num, e) {
  return Math.floor(Math.abs(num) / Math.pow(10, e)) % 10;
}

function digitCount(num) {
  return Math.floor(Math.log10(num)) + 1;
}

function getMaxDigit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const digits = digitCount(arr[i]);
    max = Math.max(max, digits);
  }
  return max;
}

function radixSort(arr) {
  const maxLoop = getMaxDigit(arr);
  for (let i = 0; i < maxLoop; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const idx = getDigit(arr[j], i);
      bucket[idx].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}
