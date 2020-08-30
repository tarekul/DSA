function prodExCurrent(arr) {
  const result = Array.from({ length: arr.length }, () => 1);
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = result[i] * prod;
    prod *= arr[i];
  }
  prod = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = result[i] * prod;
    prod *= arr[i];
  }
  console.log(result);
}

prodExCurrent([1, 2, 3, 4]);

/*
[1,2,3,4]
[1,1,2,6]
[24,12,8,6]



*/
