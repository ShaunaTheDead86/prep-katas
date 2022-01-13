const camelCase = function(input) {
  let result = input.split(" ");

  for (let x = 1; x < result.length; x++) {
    result[x] = result[x][0].toUpperCase() + result[x].slice(1);
  }

  result = result.join("");
  
  return result;
};