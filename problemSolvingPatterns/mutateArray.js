function mutateArray(n, a) {
  const b = [];
  for (let i = 0; i < n; i++) {
    let sum = (i - 1 >= 0 ? a[i - 1] : 0) + a[i] + (i + 1 < n ? a[i + 1] : 0);
    b.push(sum);
  }
  console.log(b);
}

mutateArray(5, [4, 0, 1, -2, 3]);
