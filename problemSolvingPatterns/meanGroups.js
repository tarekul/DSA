function meanGroups(a) {
  const r = Array.from({ length: a.length }, (x) => []);
  const idxs = {};

  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a[i].length; j++) {
      sum += a[i][j];
    }
    const mean = sum / a[i].length;
    if (idxs[mean]) {
      idxs[mean].push(i);
      idxs[mean].sort((a, b) => a - b);
    } else idxs[mean] = [i];
  }

  const result = [];
  for (let i in idxs) {
    result.push(idxs[i]);
  }

  result.sort((a, b) => a[0] - b[0]);
  return result;
}

meanGroups([
  [4, 4],
  [4, 0, 3, 3],
  [2, 3],
  [3, 3, 3],
  [3, 3, 4, 2],
]);

meanGroups([[-5, 2, 3], [0, 0], [0], [-100, 100]]);
