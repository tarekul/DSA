function alternatingSort(a) {
  let i = 0;
  let j = a.length - 1;

  const result = [];

  while (i <= j) {
    if (i === j) result.push(a[i]);
    else {
      result.push(a[i]);
      result.push(a[j]);
    }

    i++;
    j--;
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] <= result[i - 1]) return false;
  }
  return true;
}

console.log(alternatingSort([1, 3, 5, 6, 4, 2]));
console.log(alternatingSort([1, 4, 5, 6, 3]));
