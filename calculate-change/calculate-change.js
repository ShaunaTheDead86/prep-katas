const denominations = [ // setup an object array with the appropriate denomination names and values from high to low
  { name: "twentyDollar", value: 2000 },
  { name: "tenDollar", value: 1000 },
  { name: "fiveDollar", value: 500 },
  { name: "twoDollar", value: 200 },
  { name: "oneDollar", value: 100 },
  { name: "quarter", value: 25 },
  { name: "dime", value: 10 },
  { name: "nickel", value: 5 },
  { name: "penny", value: 1 },
];

const calculateChange = function (total, cash) {
  let changeDue = cash - total; // find the total change due
  let result = {};  // set result to an empty object

  while (changeDue > 0) { // keep iterating while there's still change due
    for (const change of denominations) { // iterate through denominations
      while (changeDue / change.value >= 1) { // keep iterating until change due is less than the value of the current denomination

        if (result[change.name] === undefined) {  // if result doesn't yet contain a property equal to change.name
          result[change.name] = 1;  // then add that property to result
        } else {  // if it result already contains a property equal to change.name
          result[change.name]++;  // then just add 1 to it
        }

        changeDue -= change.value;  // reduce the change due by the value of the denomination before the next iteration
      }
    }
  }

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));