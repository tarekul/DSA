function minSubArrayLen(arr, num) {
  let val = 0;
  let left = 0;
  let result = Infinity;

  for (let i = 0; i < arr.length; i++) {
    val += arr[i];
    while (val >= num) {
      result = Math.min(result, i - left + 1);
      val -= arr[left];
      left++;
    }
  }

  return result !== Infinity ? result : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
