function almostTetris(n, m, figures) {
  const design = {
    1: [[0, 0]],
    2: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    3: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    4: [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 0],
    ],
  };

  //Grid matrix
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Array.from({ length: m }, (x) => 0));
  }

  for (let i = 0; i < figures.length; i++) {
    const fig = figures[i];
    checkFit(fig);
  }
  console.log(arr);

  function checkFit(fig, row = 0, col = 0) {
    const parts = design[fig];
    let fit = false;
    for (let i = 0; i < parts.length; i++) {
      if (arr[row + parts[i][0]][col + parts[i][1]] === 0) fit = true;
      else fit = false;
    }
    if (fit === true) {
      for (let i = 0; i < parts.length; i++) {
        arr[row + parts[i][0]][col + parts[i][1]] = fig;
      }
    } else {
      if (row >= n || col >= m) {
        row = row + 1;
        col = 0;
      } else col++;
      checkFit(fig, row, col);
    }

    return arr;
  }
}

almostTetris(4, 4, [4, 2, 1, 3]);
