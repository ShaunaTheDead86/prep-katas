const repeatNumbers = function(data) {
  let result = "";

  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < data[x][1]; y++) {
      result += data[x][0];
      if (x !== data.length - 1 && y === data[x][1] - 1) {
        result += ", ";
      }
    }
  }

  return result;
};