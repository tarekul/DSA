function riverSizes(matrix) {
  const sizes = [];
  const visited = {};
  const rowMax = matrix.length;
  const colMax = matrix[0].length;

  function traverseNode(row, col) {
    if (matrix[row][col] === 0) return 0;
    else if (visited[`${row},${col}`]) return 0;
    visited[`${row},${col}`] = true;
    let total = 1;

    for (let i = -1; i <= 1; i++) {
      if (i === 0) continue;
      else {
        if (row + i >= 0 && row + i < rowMax)
          total += traverseNode(row + i, col);
        if (col + i >= 0 && col + i < colMax)
          total += traverseNode(row, col + i);
      }
    }
    return total;
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const size = traverseNode(row, col);
      if (size > 0) sizes.push(size);
    }
  }
  return sizes;
}

riverSizes([
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
]);
// riverSizes([
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0],
// ]);
