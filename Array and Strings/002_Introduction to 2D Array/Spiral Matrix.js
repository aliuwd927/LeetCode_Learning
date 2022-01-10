/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  const res = [];

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        res.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        res.push(matrix[i][colStart]);
      }
      colStart++;
    }
  }

  return res;
};

//kinda of get it?
