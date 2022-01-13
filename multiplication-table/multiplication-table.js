const multiplicationTable = function(maxValue) {
  let results = [];
  let regex = /,/g;

  // set up the table with numbers on the top and left
  for (let y = 0; y < maxValue; y++) {  
    results.push([]); // each iteration of y, add a new empty array to fill with x
    for (let x = 0; x < maxValue; x++) {
      if (x === 0 || y === 0) {
        results[y].push(y + x + 1); // fill the top and left rows and columns with the value of x + y + 1
      } else {
        results[y].push((y + 1) * (x + 1));
      }
    }
  }

  return results = results.join("\n").replace(regex," "); // return the result after joining the arrays and replacing the commas with spaces
};

// test the function below
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));