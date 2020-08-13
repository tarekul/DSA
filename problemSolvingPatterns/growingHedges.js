function populated_neighbors(garden, years) {
  while (years > 0) {
    garden = simulateOneYearGrowth(garden);
    years--;
  }
  console.log(countAdjacentPairs(garden));
}

function simulateOneYearGrowth(garden) {
  const newGarden = garden.map((e) => {
    return [...e];
  });
  for (let row = 0; row < garden.length; row++) {
    for (let col = 0; col < garden[row].length; col++) {
      const neighbors = countPopulatedNeighbors(garden, row, col);
      if (garden[row][col] == 1 && neighbors == 8) newGarden[row][col] = 0;
      else if (garden[row][col] == 0 && neighbors > 0) newGarden[row][col] = 1;
    }
  }

  return newGarden;
}

function countPopulatedNeighbors(garden, row, col) {
  const rowMax = garden.length;
  const colMax = garden[0].length;

  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i == 0 && j == 0) continue;
      else if (
        row + i >= 0 &&
        col + j >= 0 &&
        row + i < rowMax &&
        col + j < colMax
      ) {
        if (garden[row + i][col + j] == 1) count++;
      }
    }
  }

  return count;
}

function countAdjacentPairs(garden) {
  let count = 0;
  for (let row = 0; row < garden.length; row++) {
    for (col = 0; col < garden[row].length; col++) {
      if (garden[row][col] !== 0)
        count += countPopulatedNeighbors(garden, row, col);
    }
  }
  return count / 2;
}

populated_neighbors(
  [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 1],
  ],
  2
);

// populated_neighbors(
//   [
//     [0, 0, 1],
//     [0, 0, 0],
//   ],
//   1
// );

/*
Create a function that takes in:
an integer that represents a number of years,
a 2 dimensional matrix filled with 0s and 1s that describes a garden. 1s represent hedges, and 0s represent empty spaces. 
The function should simulate the growth of hedges over the given number of years, according to the following rules:
An empty square which is adjacent to a hedge (including diagonally) will be filled in the next year. 
A square which is filled with a hedge will be empty the following year if it is surrounded on all eight sides by other hedges, which prevents it from getting enough sun. Note that hedges on the edge squares will always get enough sun.
Any other squares will be left intact.

The function should return the number of pairs of adjacent hedges (including diagonally) at the end of this process. We’d like you to focus on writing simple, well-structured code; you will not be graded on optimizing the performance of your solution.
Examples:
Example 1. If the number of years is 1, and the initial matrix is
[[0, 0, 1],
 [0, 0, 0]]
the final matrix will be:
[[0, 1, 1],
 [0, 1, 1]]
and the function should output 6. Here are the six pairs of adjacent hedges in this garden:
[[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],
 [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]
Example 2. If the number of years is 2, and the initial matrix is:
[[1, 0, 0, 0],
 [1, 1, 0, 0],
 [1, 0, 0, 1]]
the final matrix will be:
[[1, 1, 1, 1],
 [1, 0, 1, 1],
 [1, 1, 1, 1]]
And the function should output 21.



*/
