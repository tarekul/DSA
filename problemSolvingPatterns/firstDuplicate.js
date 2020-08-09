function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    const e = a[i];
    if (a[Math.abs(e) - 1] > 0) a[Math.abs(e) - 1] = -1 * a[Math.abs(e) - 1];
    else return Math.abs(e);
  }

  return -1;
}

console.log(firstDuplicate([2, 3, 5, 5, 3, 2]));
