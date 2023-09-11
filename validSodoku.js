board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var validSodoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();
    for (let j = 0; j < board[i].length; j++) {
      let _row = board[i][j];
      let _col = board[i][j];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      //check if row element is in row  array
      if (_row !== ".") {
        if (row.has(_row)) return false;
        row.add(_row);
      }

      //check if column element is in column array
      if (_col !== ".") {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      //now check if the item is in the 3*3 box
      if (_box !== ".") {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }

  return true;
};

console.log(validSodoku(board));
