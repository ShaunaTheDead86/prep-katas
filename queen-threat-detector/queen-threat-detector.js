const generateBoard = function (wQueen, bQueen) {
  let boardSide = 8;
  let result = [];

  for (let x = 0; x < boardSide; x++) {
    result.push([]);
    for (let y = 0; y < boardSide; y++) {
      result[x].push(0);
    }
  }

  result[wQueen[0]][wQueen[1]] = 1;
  result[bQueen[0]][bQueen[1]] = 1;

  return result;
}

const queenThreat = function (board) {
  let queenYDiff = blackQueen[0] - whiteQueen[0]; // find the Y axis difference between the start position and the goal position
  let queenXDiff = blackQueen[1] - whiteQueen[1]; // find the X axis difference between the start position and the goal position

  if (Math.abs(queenXDiff) - Math.abs(queenYDiff) === 0) {
    // if the absolute value of the X - Y difference is equal to zero, then the black queen must be diagonal so return true
    return true;
  }

  if (queenYDiff === 0) {
    // black queen is not south or north and so is on the same row and can be attacked so return true right away
    return true;
  }

  if (queenXDiff === 0) {
    // black queen is not east or west and so is on the same column and can be attacked so return true right away
    return true;
  }

  return false; // all options have been checked and the black queen can't be attacked by the white queen, so return false
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));