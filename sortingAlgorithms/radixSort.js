function getDigit(num, e) {
  return Math.floor(Math.abs(num) / Math.pow(10, e)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = Math.max(count, digitCount(arr[i]));
  }
  return count;
}

function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);

  for (let i = 0; i < maxDigitCount; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
  console.log(arr);
}

radixSort([5, 1234, 567, 34, 567, 77, 2, 4]);
